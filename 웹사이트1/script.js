// 로그인 처리
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 간단한 인증 (실제 프로젝트에서는 서버 인증 필요)
    if (username === 'admin' && password === 'admin123') {
        // 로그인 성공
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('username', username);
        showDashboard();
    } else {
        alert('사용자명 또는 비밀번호가 잘못되었습니다.');
    }
});

// 대시보드 표시
function showDashboard() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('dashboard').style.display = 'flex';

    const username = sessionStorage.getItem('username');
    document.getElementById('userName').textContent = username;

    // 현재 시간 표시 및 업데이트
    updateTime();
    setInterval(updateTime, 1000);
}

// 시간 업데이트
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('currentTime').textContent = timeString;
}

// 페이지 로드 시 로그인 상태 확인
window.addEventListener('load', function() {
    if (sessionStorage.getItem('loggedIn') === 'true') {
        showDashboard();
    }
});

// 네비게이션 메뉴 처리
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        const page = this.getAttribute('data-page');

        if (page) {
            // 모든 네비게이션 아이템에서 active 클래스 제거
            document.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
            });

            // 현재 클릭한 아이템에 active 클래스 추가
            this.classList.add('active');

            // 모든 페이지 숨기기
            document.querySelectorAll('.page').forEach(p => {
                p.style.display = 'none';
            });

            // 선택한 페이지 표시
            const pageMap = {
                'overview': 'overviewPage',
                'users': 'usersPage',
                'products': 'productsPage',
                'settings': 'settingsPage'
            };

            const pageId = pageMap[page];
            if (pageId) {
                document.getElementById(pageId).style.display = 'block';
            }
        }
    });
});

// 로그아웃 처리
document.getElementById('logoutBtn').addEventListener('click', function(e) {
    e.preventDefault();

    if (confirm('로그아웃 하시겠습니까?')) {
        sessionStorage.clear();
        location.reload();
    }
});

// 통계 카드 애니메이션
function animateNumbers() {
    const numbers = document.querySelectorAll('.stat-number');

    numbers.forEach(num => {
        const text = num.textContent.replace(/[^0-9]/g, '');
        if (text) {
            const target = parseInt(text);
            let current = 0;
            const increment = target / 50;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }

                if (num.textContent.includes('₩')) {
                    num.textContent = '₩' + Math.floor(current).toLocaleString();
                } else {
                    num.textContent = Math.floor(current).toLocaleString();
                }
            }, 20);
        }
    });
}

// 대시보드 표시될 때 애니메이션 실행
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.id === 'dashboard' &&
            mutation.target.style.display === 'flex') {
            setTimeout(animateNumbers, 100);
        }
    });
});

observer.observe(document.getElementById('dashboard'), {
    attributes: true,
    attributeFilter: ['style']
});
