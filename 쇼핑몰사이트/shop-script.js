// 상품 데이터 - 무신사 스타일 TOP 10
const products = [
    {
        id: 1,
        name: '[무신사 스탠다드] 오버핏 후드 집업',
        brand: '무신사 스탠다드',
        price: 39900,
        originalPrice: 49900,
        discount: 20,
        category: 'fashion',
        icon: '🧥',
        image: './images/오버핏 후드 집업.webp',
        description: '데일리 착용하기 좋은 기본 후드 집업',
        detailedDescription: '편안한 착용감과 실용적인 디자인이 돋보이는 오버핏 후드 집업입니다. 부담없는 가격대로 일상에서 자주 착용하기 좋으며, 남녀 모두 착용 가능한 유니섹스 디자인입니다. 기모 안감 처리로 보온성이 뛰어나며, 넉넉한 핏으로 레이어드하기에도 좋습니다.',
        specs: [
            '소재: 면 100% (기모 안감)',
            '색상: 블랙, 그레이, 네이비',
            '사이즈: S, M, L, XL',
            '세탁: 찬물 세탁, 드라이클리닝 가능',
            '제조국: 한국',
            '두께감: 두꺼움 (겨울용)'
        ],
        sizeGuide: 'M 기준 - 총장 70cm, 어깨 60cm, 가슴 64cm, 소매 60cm',
        care: '세탁 시 뒤집어서 찬물 세탁해주세요. 직사광선을 피해 그늘에서 건조해주세요.'
    },
    {
        id: 2,
        name: '[디스이즈네버댓] 베이직 로고 맨투맨',
        brand: '디스이즈네버댓',
        price: 59000,
        originalPrice: 69000,
        discount: 14,
        category: 'fashion',
        icon: '👕',
        image: './images/디스이즈네버댓 맨투맨.webp',
        description: '심플한 로고 포인트의 데일리 맨투맨',
        detailedDescription: '디스이즈네버댓의 시그니처 로고가 새겨진 베이직 맨투맨입니다. 고급스러운 면 소재를 사용하여 착용감이 부드럽고 편안합니다. 심플한 디자인으로 어떤 하의와도 매치하기 좋으며, 오래 입어도 늘어나지 않는 견고한 원단이 특징입니다.',
        specs: [
            '소재: 면 80%, 폴리에스터 20%',
            '색상: 화이트, 블랙, 그레이, 베이지',
            '사이즈: XS, S, M, L, XL',
            '세탁: 손세탁 권장, 중성세제 사용',
            '제조국: 한국',
            '두께감: 보통 (봄/가을용)'
        ],
        sizeGuide: 'L 기준 - 총장 72cm, 어깨 56cm, 가슴 60cm, 소매 63cm',
        care: '염색 제품은 단독 세탁을 권장하며, 뜨거운 물 사용을 피해주세요.'
    },
    {
        id: 3,
        name: '[커버낫] 워크웨어 카고 팬츠',
        brand: '커버낫',
        price: 98000,
        originalPrice: 128000,
        discount: 23,
        category: 'fashion',
        icon: '👖',
        image: './images/커버낫 카고팬츠.webp',
        description: '실용성과 스타일을 겸비한 카고 팬츠',
        detailedDescription: '밀리터리 감성의 워크웨어 카고 팬츠입니다. 다양한 포켓 디테일로 실용성을 높였으며, 편안한 핏으로 활동성이 뛰어납니다. 튼튼한 원단을 사용하여 내구성이 좋고, 유행을 타지 않는 디자인으로 오래도록 착용할 수 있습니다.',
        specs: [
            '소재: 면 97%, 스판덱스 3%',
            '색상: 블랙, 카키, 올리브',
            '사이즈: 28, 30, 32, 34, 36',
            '세탁: 찬물 세탁, 표백제 사용 금지',
            '제조국: 중국',
            '핏: 레귤러 핏'
        ],
        sizeGuide: '32 기준 - 총장 104cm, 허리 84cm, 밑위 33cm, 밑단 19cm',
        care: '세탁 시 색상별로 분리하여 세탁하고, 지퍼와 버튼을 잠근 후 세탁해주세요.'
    },
    {
        id: 4,
        name: '[나이키] 에어포스 1 로우 화이트',
        brand: 'Nike',
        price: 139000,
        originalPrice: 139000,
        discount: 0,
        category: 'fashion',
        icon: '👟',
        image: './images/나이키 에어포스1.webp',
        description: '영원한 스테디셀러 클래식 스니커즈',
        detailedDescription: '1982년 출시 이후 40년 넘게 사랑받는 나이키의 아이코닉한 스니커즈입니다. 깔끔한 올화이트 컬러로 어떤 스타일에도 잘 어울리며, 에어 쿠셔닝 기술로 착용감이 뛰어납니다. 내구성 좋은 가죽 소재로 오래 신을 수 있습니다.',
        specs: [
            '소재: 천연 가죽, 합성 가죽',
            '색상: 화이트/화이트',
            '사이즈: 230mm ~ 290mm',
            '밑창: 고무 아웃솔',
            '제조국: 베트남',
            '특징: 에어 쿠셔닝, 내구성 가죽'
        ],
        sizeGuide: '평소 사이즈 그대로 주문하시면 됩니다. 발볼이 넓으신 분은 5mm 크게 주문 권장',
        care: '가죽 전용 클리너로 관리하시고, 직사광선과 습기를 피해 보관해주세요.'
    },
    {
        id: 5,
        name: '[마르디 메크르디] 스웨트셔츠',
        brand: 'Mardi Mercredi',
        price: 78000,
        originalPrice: 89000,
        discount: 12,
        category: 'fashion',
        icon: '👔',
        image: './images/마르디메크르디 스웨트셔츠.webp',
        description: '프렌치 감성의 감각적인 스웨트셔츠',
        detailedDescription: '마르디 메크르디의 시그니처 자수 로고가 포인트인 스웨트셔츠입니다. 프렌치 감성의 여성스러운 디자인으로 데일리룩부터 꾸안꾸 스타일까지 다양하게 연출 가능합니다. 부드러운 면 소재로 착용감이 좋고, 루즈한 핏으로 편안하게 입을 수 있습니다.',
        specs: [
            '소재: 면 100%',
            '색상: 아이보리, 라이트그레이, 네이비',
            '사이즈: S, M',
            '세탁: 단독 세탁 권장, 찬물 손세탁',
            '제조국: 한국',
            '두께감: 보통 (봄/가을용)'
        ],
        sizeGuide: 'M 기준 - 총장 62cm, 어깨 57cm, 가슴 58cm, 소매 55cm',
        care: '자수 부분 손상 방지를 위해 손세탁을 권장하며, 세탁망 사용 시 세탁기 가능합니다.'
    },
    {
        id: 6,
        name: '[카르하트] 디트로이트 재킷',
        brand: 'Carhartt WIP',
        price: 298000,
        originalPrice: 339000,
        discount: 12,
        category: 'fashion',
        icon: '🧥',
        image: './images/카르하트 재킷.webp',
        description: '워크웨어 감성의 클래식 재킷',
        detailedDescription: '카르하트의 시그니처 디트로이트 재킷입니다. 튼튼한 덕 캔버스 소재로 내구성이 뛰어나며, 블랭킷 안감 처리로 보온성까지 갖췄습니다. 빈티지한 워크웨어 무드를 연출할 수 있으며, 시간이 지날수록 자연스러운 워싱감이 생겨 멋스러운 느낌을 줍니다.',
        specs: [
            '소재: 덕 캔버스 100% (블랭킷 안감)',
            '색상: 블랙, 해밀턴 브라운, 카키',
            '사이즈: S, M, L, XL',
            '세탁: 드라이클리닝 권장',
            '제조국: 중국',
            '두께감: 매우 두꺼움 (겨울용)'
        ],
        sizeGuide: 'L 기준 - 총장 74cm, 어깨 49cm, 가슴 61cm, 소매 65cm',
        care: '세탁 시 원단 손상을 방지하기 위해 드라이클리닝을 권장합니다.'
    },
    {
        id: 7,
        name: '[리바이스] 501 오리지널 진',
        brand: "Levi's",
        price: 119000,
        originalPrice: 139000,
        discount: 14,
        category: 'fashion',
        icon: '👖',
        image: './images/리바이스 진.webp',
        description: '데님의 원조, 리바이스 501',
        detailedDescription: '1873년 탄생 이후 150년간 사랑받아온 리바이스 501 오리지널 핏입니다. 클래식한 스트레이트 핏으로 체형을 가리지 않고 누구에게나 잘 어울립니다. 버튼 플라이 디테일과 레드탭이 특징이며, 질기고 튼튼한 데님 원단으로 오래 착용할 수 있습니다.',
        specs: [
            '소재: 면 100% 데님',
            '색상: 인디고 블루, 블랙, 라이트워시',
            '사이즈: 28, 29, 30, 31, 32, 33, 34',
            '세탁: 첫 세탁 후 약간의 수축 있음',
            '제조국: 인도네시아',
            '핏: 스트레이트 레귤러 핏'
        ],
        sizeGuide: '31 기준 - 총장 107cm, 허리 82cm, 밑위 31cm, 밑단 20cm',
        care: '색상 유지를 위해 첫 세탁은 드라이클리닝 권장, 이후 찬물 단독 세탁'
    },
    {
        id: 8,
        name: '[뉴발란스] 530 화이트 실버',
        brand: 'New Balance',
        price: 129000,
        originalPrice: 139000,
        discount: 7,
        category: 'fashion',
        icon: '👟',
        image: './images/뉴발란스 530.webp',
        description: '레트로 러닝 감성의 트렌디한 스니커즈',
        detailedDescription: '2000년대 러닝화의 감성을 재해석한 뉴발란스 530입니다. Y2K 무드의 청키한 실루엣과 메탈릭 디테일이 돋보이며, ABZORB 미드솔 쿠셔닝으로 착용감이 뛰어납니다. 캐주얼한 스타일부터 스트릿 룩까지 다양하게 연출 가능합니다.',
        specs: [
            '소재: 메쉬, 합성 가죽, 스웨이드',
            '색상: 화이트/실버',
            '사이즈: 230mm ~ 285mm',
            '밑창: ABZORB 미드솔',
            '제조국: 베트남',
            '특징: 충격 흡수, 쿠셔닝'
        ],
        sizeGuide: '발볼이 넓은 편이니 평소보다 5mm 크게 주문 권장',
        care: '부드러운 솔로 먼지를 제거하고, 중성세제로 부분 세탁 후 그늘에서 건조'
    },
    {
        id: 9,
        name: '[우아한형제들] 배민 로고 볼캡',
        brand: '우아한형제들',
        price: 25000,
        originalPrice: 29000,
        discount: 14,
        category: 'fashion',
        icon: '🧢',
        image: './images/배민 볼캡.webp',
        description: '유니크한 감성의 배민 로고캡',
        detailedDescription: '배달의민족의 귀여운 로고가 자수로 새겨진 볼캡입니다. 심플하면서도 유니크한 디자인으로 개성을 표현할 수 있으며, 조절 가능한 스트랩으로 누구나 착용하기 좋습니다. 가볍고 통기성 좋은 소재로 사계절 착용 가능합니다.',
        specs: [
            '소재: 면 100%',
            '색상: 블랙, 베이지',
            '사이즈: 프리사이즈 (조절 가능)',
            '세탁: 손세탁 권장',
            '제조국: 한국',
            '특징: 자수 로고, 조절 스트랩'
        ],
        sizeGuide: '둘레 조절 가능 (55cm ~ 60cm)',
        care: '형태 유지를 위해 손세탁 권장, 자연 건조'
    },
    {
        id: 10,
        name: '[젠틀몬스터] 선글라스 본본 01',
        brand: 'Gentle Monster',
        price: 248000,
        originalPrice: 248000,
        discount: 0,
        category: 'fashion',
        icon: '🕶️',
        image: './images/젠틀몬스터 선글라스.webp',
        description: '모던하고 세련된 디자이너 선글라스',
        detailedDescription: '젠틀몬스터의 시그니처 디자인 본본 프레임입니다. 유니크한 프레임 디자인과 고급스러운 마감이 돋보이며, UV400 렌즈로 자외선을 완벽하게 차단합니다. 케이스와 클리닝 천이 함께 제공되며, 얼굴형에 구애받지 않는 범용적인 디자인입니다.',
        specs: [
            '소재: 아세테이트 프레임',
            '렌즈: UV400 차단',
            '색상: 블랙, 토터스쉘',
            '사이즈: 프리사이즈',
            '제조국: 한국',
            '구성: 선글라스, 케이스, 클리닝 천'
        ],
        sizeGuide: '프레임 가로 14.5cm, 렌즈 가로 5.5cm, 세로 5.0cm',
        care: '전용 클리닝 천으로 렌즈를 닦아주시고, 케이스에 보관해주세요.'
    }
];

// 샘플 리뷰 데이터
const reviews = {
    1: [
        { author: '김민준', stars: 5, text: '가격 대비 퀄리티 정말 좋아요. 기모 안감이 따뜻하고 핏도 예뻐요!' },
        { author: '이서연', stars: 5, text: '오버핏이라 여유있게 입기 좋네요. 세탁 후에도 늘어나지 않아요.' },
        { author: '박지훈', stars: 4, text: '무난하게 입기 좋은 기본템입니다. 색상도 다양해서 좋아요.' }
    ],
    2: [
        { author: '최유진', stars: 5, text: '디네댓 로고 자수가 고급스럽고 원단 터치감이 좋아요!' },
        { author: '정우성', stars: 5, text: '심플해서 어떤 옷이랑도 잘 어울려요. 사이즈도 딱 맞습니다.' },
        { author: '강민지', stars: 4, text: '예상보다 두께감이 있어서 봄가을 입기 좋을 것 같아요.' }
    ],
    3: [
        { author: '윤재호', stars: 5, text: '포켓이 많아서 정말 실용적이에요. 원단도 튼튼합니다!' },
        { author: '한소희', stars: 4, text: '카고팬츠 찾고 있었는데 핏이 예쁘네요. 배송도 빨랐어요.' },
        { author: '임현수', stars: 5, text: '커버낫 제품 믿고 삽니다. 기대 이상이에요!' }
    ],
    4: [
        { author: '신동욱', stars: 5, text: '역시 에어포스! 깔끔하고 어디에나 잘 어울려요.' },
        { author: '오지영', stars: 5, text: '클래식의 정석. 절대 실패 없는 선택입니다.' },
        { author: '송민호', stars: 4, text: '발볼이 좀 좁아서 반 사이즈 크게 주문했어요. 딱 좋습니다!' }
    ],
    5: [
        { author: '김나영', stars: 5, text: '마메 스웨트 너무 예뻐요! 자수도 정교하고 색감도 사진과 같아요.' },
        { author: '이동욱', stars: 5, text: '프렌치 감성 제대로네요. 여친 선물로 샀는데 너무 좋아합니다!' },
        { author: '박수현', stars: 4, text: '루즈한 핏이라 편하게 입기 좋아요. 세탁은 조심스럽게 해야겠어요.' }
    ],
    6: [
        { author: '최현우', stars: 5, text: '카르하트 디트로이트 재킷 정말 멋있어요. 무게감 있고 든든합니다!' },
        { author: '강태양', stars: 5, text: '겨울에 딱이에요. 보온성 최고! 빈티지 감성도 살아요.' },
        { author: '윤하늘', stars: 4, text: '가격대가 있지만 그만한 가치가 있는 제품입니다.' }
    ],
    7: [
        { author: '박정환', stars: 5, text: '리바이스 501은 언제나 옳죠. 스트레이트 핏 정말 좋습니다!' },
        { author: '김수지', stars: 5, text: '데님 원단 퀄리티가 좋아요. 오래 입을 수 있을 것 같아요.' },
        { author: '이준영', stars: 4, text: '첫 세탁 후 약간 줄었어요. 한 치수 크게 사는 게 좋을 듯!' }
    ],
    8: [
        { author: '정예림', stars: 5, text: '530 너무 이뻐요! Y2K 감성 제대로고 쿠셔닝도 좋아요.' },
        { author: '안재현', stars: 5, text: '뉴발 530 정말 편해요. 하루 종일 신어도 발 안 아파요!' },
        { author: '조민서', stars: 4, text: '발볼 넓은 분들은 반 사이즈 업 추천드려요. 디자인은 완전 취저!' }
    ],
    9: [
        { author: '홍길동', stars: 5, text: '배민 볼캡 귀엽고 퀄리티도 좋아요. 가성비 최고!' },
        { author: '서지우', stars: 4, text: '로고 자수가 깔끔하고 착용감도 편해요. 선물용으로도 좋을 듯!' },
        { author: '문채원', stars: 5, text: '심플하면서 포인트 주기 좋은 모자예요. 추천합니다!' }
    ],
    10: [
        { author: '유재석', stars: 5, text: '젠몬 선글라스 역시 고급스럽네요. 디자인이 유니크해요!' },
        { author: '이효리', stars: 5, text: '얼굴형 가리지 않고 잘 어울려요. 케이스도 예쁘게 왔어요!' },
        { author: '강호동', stars: 4, text: '가격대가 있지만 브랜드 가치와 디자인 생각하면 만족스러워요.' }
    ]
};

// 전역 변수
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let selectedProduct = null;
let detailQuantity = 1;
let currentCategory = 'ranking';

// 상품 카테고리 매핑
const productCategoryMap = {
    1: 'outer',    // 후드 집업
    2: 'top',      // 맨투맨
    3: 'bottom',   // 카고 팬츠
    4: 'shoes',    // 나이키 에어포스
    5: 'top',      // 스웨트셔츠
    6: 'outer',    // 카르하트 재킷
    7: 'bottom',   // 리바이스 진
    8: 'shoes',    // 뉴발란스
    9: 'top',      // 볼캡 (상의로 분류)
    10: 'outer'    // 선글라스 (아우터로 분류)
};

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartCount();
    updateUserUI();
    initializeEventListeners();
});

// 이벤트 리스너 초기화
function initializeEventListeners() {
    // 네비게이션 카테고리
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                switchCategory(page);
                // 네비게이션 활성화 상태 변경
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // 검색
    document.getElementById('searchInput').addEventListener('input', handleSearch);

    // 사용자 버튼
    document.getElementById('userBtn').addEventListener('click', () => {
        document.getElementById('authModal').classList.add('active');
        if (currentUser) {
            showUserMenu();
        } else {
            showLoginForm();
        }
    });

    // 장바구니 버튼
    document.getElementById('cartBtn').addEventListener('click', () => {
        document.getElementById('cartModal').classList.add('active');
        renderCart();
    });

    // 모달 닫기 버튼들
    document.getElementById('closeAuthBtn').addEventListener('click', () => {
        document.getElementById('authModal').classList.remove('active');
    });
    document.getElementById('closeCartBtn').addEventListener('click', () => {
        document.getElementById('cartModal').classList.remove('active');
    });
    document.getElementById('closeDetailBtn').addEventListener('click', () => {
        document.getElementById('productDetailModal').classList.remove('active');
    });
    document.getElementById('closePaymentBtn').addEventListener('click', () => {
        document.getElementById('paymentModal').classList.remove('active');
    });
    document.getElementById('closeOrderBtn').addEventListener('click', () => {
        document.getElementById('orderModal').classList.remove('active');
    });

    // 로그인/회원가입 전환
    document.getElementById('showSignup').addEventListener('click', (e) => {
        e.preventDefault();
        showSignupForm();
    });
    document.getElementById('showLogin').addEventListener('click', (e) => {
        e.preventDefault();
        showLoginForm();
    });

    // 폼 제출
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('signupForm').addEventListener('submit', handleSignup);

    // 로그아웃
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);

    // 주문하기
    document.getElementById('checkoutBtn').addEventListener('click', handleCheckout);

    // 최종 결제
    document.getElementById('finalPaymentBtn').addEventListener('click', handleFinalPayment);

    // 상품 상세 수량 조절
    document.getElementById('detailQtyMinus').addEventListener('click', () => {
        if (detailQuantity > 1) {
            detailQuantity--;
            document.getElementById('detailQuantity').value = detailQuantity;
        }
    });
    document.getElementById('detailQtyPlus').addEventListener('click', () => {
        detailQuantity++;
        document.getElementById('detailQuantity').value = detailQuantity;
    });

    // 상세 페이지에서 장바구니 담기
    document.getElementById('detailAddToCart').addEventListener('click', () => {
        if (selectedProduct) {
            addToCart(selectedProduct.id, detailQuantity);
            document.getElementById('productDetailModal').classList.remove('active');
        }
    });

    // 모달 배경 클릭 시 닫기
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });
}

// 상품 렌더링
function renderProducts(filterCategory = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    const filteredProducts = filterCategory === 'all'
        ? products
        : products.filter(p => p.category === filterCategory);

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            ${product.discount > 0 ? `<div class="discount-badge">${product.discount}%</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.parentElement.innerHTML='${product.icon}'">
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-footer">
                    <div class="product-price-wrap">
                        ${product.discount > 0 ? `<div class="original-price">${product.originalPrice.toLocaleString()}원</div>` : ''}
                        <div class="product-price">${product.price.toLocaleString()}원</div>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id}, 1); event.stopPropagation();">
                        담기
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// 상품 상세 모달 표시
function showProductDetail(productId) {
    selectedProduct = products.find(p => p.id === productId);
    if (!selectedProduct) return;

    detailQuantity = 1;
    document.getElementById('detailQuantity').value = 1;

    // 이미지 표시
    const detailImageEl = document.getElementById('detailImage');
    detailImageEl.innerHTML = `<img src="${selectedProduct.image}" alt="${selectedProduct.name}" onerror="this.parentElement.innerHTML='${selectedProduct.icon}'">`;

    document.getElementById('detailCategory').textContent = selectedProduct.brand;
    document.getElementById('detailName').textContent = selectedProduct.name;

    // 가격 표시 (할인가가 있으면 원가도 표시)
    let priceHTML = '';
    if (selectedProduct.discount > 0) {
        priceHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="text-decoration: line-through; color: #999; font-size: 20px;">${selectedProduct.originalPrice.toLocaleString()}원</span>
                <span style="color: #ff4444; font-weight: 700;">${selectedProduct.discount}% 할인</span>
            </div>
            <div>${selectedProduct.price.toLocaleString()}원</div>
        `;
    } else {
        priceHTML = selectedProduct.price.toLocaleString() + '원';
    }
    document.getElementById('detailPrice').innerHTML = priceHTML;
    document.getElementById('detailDescription').textContent = selectedProduct.detailedDescription;

    // 상품 스펙 (사이즈 가이드와 세탁 방법 추가)
    let specsHTML = selectedProduct.specs.map(spec => `<li>${spec}</li>`).join('');
    if (selectedProduct.sizeGuide) {
        specsHTML += `<li><strong>사이즈 가이드:</strong> ${selectedProduct.sizeGuide}</li>`;
    }
    if (selectedProduct.care) {
        specsHTML += `<li><strong>세탁/관리:</strong> ${selectedProduct.care}</li>`;
    }
    document.getElementById('detailSpecs').innerHTML = specsHTML;

    // 리뷰
    const productReviews = reviews[productId] || [];
    const reviewsHTML = productReviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <span class="review-author">${review.author}</span>
                <span class="review-stars">${'⭐'.repeat(review.stars)}</span>
            </div>
            <p class="review-text">${review.text}</p>
        </div>
    `).join('');
    document.getElementById('reviewList').innerHTML = reviewsHTML || '<p style="color: #999;">아직 리뷰가 없습니다.</p>';

    document.getElementById('productDetailModal').classList.add('active');
}

// 카테고리 이름 변환
function getCategoryName(category) {
    const names = {
        fashion: '패션'
    };
    return names[category] || category;
}

// 검색 처리
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const productsGrid = document.getElementById('productsGrid');

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.brand.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm)
    );

    if (searchTerm === '') {
        renderProducts();
    } else {
        productsGrid.innerHTML = filteredProducts.map(product => `
            <div class="product-card" onclick="showProductDetail(${product.id})">
                ${product.discount > 0 ? `<div class="discount-badge">${product.discount}%</div>` : ''}
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.parentElement.innerHTML='${product.icon}'">
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-description">${product.description}</div>
                    <div class="product-footer">
                        <div class="product-price-wrap">
                            ${product.discount > 0 ? `<div class="original-price">${product.originalPrice.toLocaleString()}원</div>` : ''}
                            <div class="product-price">${product.price.toLocaleString()}원</div>
                        </div>
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id}, 1); event.stopPropagation();">
                            담기
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// 장바구니에 추가
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    saveCart();
    updateCartCount();
    showNotification('장바구니에 추가되었습니다!');
}

// 장바구니에서 제거
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

// 수량 변경
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCart();
        }
    }
}

// 장바구니 저장
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// 장바구니 개수 업데이트
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// 장바구니 렌더링
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');

    if (cart.length === 0) {
        cartItems.innerHTML = '';
        cartEmpty.style.display = 'block';
        document.getElementById('totalPrice').textContent = '0원';
        return;
    }

    cartEmpty.style.display = 'none';
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.parentElement.innerHTML='${item.icon}'">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price.toLocaleString()}원</div>
                <div class="cart-item-actions">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">삭제</button>
                </div>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('totalPrice').textContent = total.toLocaleString() + '원';
}

// 사용자 UI 업데이트
function updateUserUI() {
    const userNameEl = document.getElementById('userName');
    if (currentUser) {
        userNameEl.textContent = currentUser.name + '님';
    } else {
        userNameEl.textContent = '로그인';
    }
}

// 로그인 폼 표시
function showLoginForm() {
    document.getElementById('authTitle').textContent = '로그인';
    document.getElementById('loginForm').style.display = 'flex';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('userMenu').style.display = 'none';
}

// 회원가입 폼 표시
function showSignupForm() {
    document.getElementById('authTitle').textContent = '회원가입';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'flex';
    document.getElementById('userMenu').style.display = 'none';
}

// 사용자 메뉴 표시
function showUserMenu() {
    document.getElementById('authTitle').textContent = '내 정보';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('userMenu').style.display = 'block';
    document.getElementById('userMenuName').textContent = currentUser.name;
    document.getElementById('userMenuEmail').textContent = currentUser.email;
}

// 로그인 처리
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // localStorage에서 사용자 찾기
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = { name: user.name, email: user.email };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserUI();
        document.getElementById('authModal').classList.remove('active');
        showNotification(`${user.name}님 환영합니다!`);
        document.getElementById('loginForm').reset();
    } else {
        alert('이메일 또는 비밀번호가 올바르지 않습니다.');
    }
}

// 회원가입 처리
function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const passwordConfirm = document.getElementById('signupPasswordConfirm').value;

    if (password !== passwordConfirm) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }

    // 사용자 저장
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // 이메일 중복 체크
    if (users.find(u => u.email === email)) {
        alert('이미 가입된 이메일입니다.');
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    // 자동 로그인
    currentUser = { name, email };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserUI();
    document.getElementById('authModal').classList.remove('active');
    showNotification('회원가입이 완료되었습니다!');
    document.getElementById('signupForm').reset();
}

// 로그아웃
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserUI();
    document.getElementById('authModal').classList.remove('active');
    showNotification('로그아웃 되었습니다.');
}

// 주문하기 (결제 페이지로 이동)
function handleCheckout() {
    if (cart.length === 0) {
        alert('장바구니가 비어있습니다.');
        return;
    }

    // 로그인 확인
    if (!currentUser) {
        document.getElementById('cartModal').classList.remove('active');
        document.getElementById('authModal').classList.add('active');
        showLoginForm();
        showNotification('주문하려면 로그인이 필요합니다.');
        return;
    }

    // 결제 페이지 표시
    document.getElementById('cartModal').classList.remove('active');
    showPaymentModal();
}

// 결제 모달 표시
function showPaymentModal() {
    // 주문 상품 표시
    const paymentItems = document.getElementById('paymentItems');
    paymentItems.innerHTML = cart.map(item => `
        <div class="payment-item">
            <div class="payment-item-info">
                <div style="width: 60px; height: 75px; overflow: hidden; flex-shrink: 0;">
                    <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.parentElement.innerHTML='<div style=\'font-size: 32px;\'>${item.icon}</div>'">
                </div>
                <div class="payment-item-details">
                    <h4>${item.name}</h4>
                    <p>${item.quantity}개</p>
                </div>
            </div>
            <div class="payment-item-price">${(item.price * item.quantity).toLocaleString()}원</div>
        </div>
    `).join('');

    // 금액 계산
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 50000 ? 0 : 3000;
    const total = subtotal + shipping;

    document.getElementById('paymentSubtotal').textContent = subtotal.toLocaleString() + '원';
    document.getElementById('paymentShipping').textContent = shipping === 0 ? '무료' : shipping.toLocaleString() + '원';
    document.getElementById('paymentTotal').textContent = total.toLocaleString() + '원';

    // 배송 정보 자동 입력 (사용자 정보가 있으면)
    if (currentUser) {
        document.getElementById('receiverName').value = currentUser.name;
    }

    document.getElementById('paymentModal').classList.add('active');
}

// 최종 결제 처리
function handleFinalPayment() {
    const receiverName = document.getElementById('receiverName').value;
    const receiverPhone = document.getElementById('receiverPhone').value;
    const deliveryAddress = document.getElementById('deliveryAddress').value;

    if (!receiverName || !receiverPhone || !deliveryAddress) {
        alert('배송 정보를 모두 입력해주세요.');
        return;
    }

    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const paymentMethodNames = {
        card: '신용/체크카드',
        transfer: '계좌이체',
        phone: '휴대폰 결제',
        kakao: '카카오페이'
    };

    // 주문 완료
    const orderNumber = 'ORDER-' + Date.now();
    document.getElementById('orderNumber').textContent = orderNumber;
    document.getElementById('orderPaymentMethod').textContent = paymentMethodNames[paymentMethod];

    document.getElementById('paymentModal').classList.remove('active');
    document.getElementById('orderModal').classList.add('active');

    // 장바구니 비우기
    cart = [];
    saveCart();
    updateCartCount();

    // 배송 폼 초기화
    document.getElementById('deliveryForm').reset();
}

// 알림 표시
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// 카테고리 전환
function switchCategory(category) {
    currentCategory = category;

    // 섹션 헤더 업데이트
    const sectionHeader = document.querySelector('.section-header h2');
    const categoryNames = {
        'ranking': '무신사 랭킹 TOP 10',
        'outer': '아우터',
        'top': '상의',
        'bottom': '하의',
        'shoes': '신발'
    };
    sectionHeader.textContent = categoryNames[category] || '전체 상품';

    // 상품 필터링
    if (category === 'ranking') {
        renderProducts();
    } else {
        renderCategoryProducts(category);
    }
}

// 카테고리별 상품 렌더링
function renderCategoryProducts(category) {
    const productsGrid = document.getElementById('productsGrid');
    const filteredProducts = products.filter(product =>
        productCategoryMap[product.id] === category
    );

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 80px 20px; color: #999;">
                <p style="font-size: 18px; margin-bottom: 10px;">해당 카테고리의 상품이 없습니다</p>
                <p style="font-size: 14px;">곧 다양한 상품을 준비하겠습니다</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            ${product.discount > 0 ? `<div class="discount-badge">${product.discount}%</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.parentElement.innerHTML='${product.icon}'">
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-footer">
                    <div class="product-price-wrap">
                        ${product.discount > 0 ? `<div class="original-price">${product.originalPrice.toLocaleString()}원</div>` : ''}
                        <div class="product-price">${product.price.toLocaleString()}원</div>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id}, 1); event.stopPropagation();">
                        담기
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// 광고 상세 표시
function showAdDetail(model) {
    const adInfo = {
        'iu': {
            title: 'NEW BALANCE X 아이유',
            description: '아이유와 함께하는 2026 봄 컬렉션. 편안함과 스타일을 동시에 만족시키는 뉴발란스의 새로운 라인업을 만나보세요.',
            products: '뉴발란스 530, 574, 327 시리즈'
        },
        'chaeunwoo': {
            title: 'CALVIN KLEIN X 차은우',
            description: '차은우가 제안하는 미니멀 에센셜. 캘빈클라인의 시그니처 디자인과 차은우의 세련된 스타일링이 만나 완성된 컬렉션입니다.',
            products: '캘빈클라인 언더웨어, 데님, 아우터 라인'
        }
    };

    const info = adInfo[model];
    if (info) {
        alert(`${info.title}\n\n${info.description}\n\n추천 상품: ${info.products}`);
    }
}
