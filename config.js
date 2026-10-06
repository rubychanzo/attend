// ===== 행사 참석확인 설정 =====
// 구글시트에서 [배포 → 웹 앱]으로 받은 주소를 api 에 붙여넣으세요.
window.ATTEND_CONFIG = {
  api: 'https://script.google.com/macros/s/AKfycbyoUJTietelG91pasapwrkNDGlBdlmtWsGy7CQRXFbkXKTCkxOaDIRaQSwcEUeQ4oN_/exec',          // 예: 'https://script.google.com/macros/s/AKfy.../exec'
  orgName: '인천광역시자살예방센터',      // 포스터·화면 아래에 표시할 기관명 (비워도 됨)
  consentText:      // 현장등록 화면의 개인정보 수집·이용 안내 (센터 규정에 맞게 고쳐 쓰세요)
    '수집 항목: 이름, 연락처, 소속\n' +
    '수집 목적: 행사 참석 확인 및 관련 안내\n' +
    '보유 기간: 행사 종료 후 1년\n' +
    '동의를 거부할 수 있으며, 거부하실 경우 현장 참석 등록이 제한될 수 있습니다.'
};
