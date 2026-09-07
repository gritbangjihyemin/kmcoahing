// ==========================================================================
// Firebase 프로젝트 설정
// Firebase 콘솔(https://console.firebase.google.com) > 프로젝트 설정 > 일반
// > "내 앱" 에서 웹 앱을 추가하면 아래와 똑같은 형태의 값을 받을 수 있습니다.
// 아래 값을 본인 프로젝트 값으로 교체한 뒤 저장하세요.
// index.html, admin.html 둘 다 이 파일 하나만 불러오므로 여기 한 곳만 고치면 됩니다.
// ==========================================================================
const firebaseConfig = {
  apiKey: "AIzaSyApcpBr1bRBY5NuI3S6029yjYmIujFfVRg",
  authDomain: "kmcoaching.firebaseapp.com",
  projectId: "kmcoaching",
  storageBucket: "kmcoaching.firebasestorage.app",
  messagingSenderId: "981439599891",
  appId: "1:981439599891:web:36328d45cce0fcac2636e6"
};

// 관리자 페이지 접속 비밀번호 (원하는 값으로 바꿔서 사용하세요)
const ADMIN_PASSWORD = "qwer4010A!";
