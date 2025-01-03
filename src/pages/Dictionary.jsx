import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Dictionary.css';

const Dictionary = () => {
  const [activeTab, setActiveTab] = useState("ㄱ~ㅁ");
  const [currentPage, setCurrentPage] = useState(0);

  const dictionaryData = {
    "영어": [
      { term: "AOB", definition: "의제 외 기타사항" },
      { term: "As-is", definition: "현재 상태. 주로 실행 전/후 차이를 보여주어야 하는 보고서에서 To-be와 함께 사용한다" },
      { term: "BCC", definition: "숨은 참조. 수신자에게 보이지 않게 메일 참조를 걸고 싶을 때 사용한다" },
      { term: "BEP", definition: "손익분기점. 일정 기간 동안의 총 비용과 총 수익이 동일한 지점" },
      { term: "BM", definition: "비즈니스 모델. 기업의 총체적인 사업 아이디어" },
      { term: "BP", definition: "산업별로 가장 잘하고 있는 사업 방식, 모범 경영 사례" },
      { term: "CC", definition: "참조. 메일을 받는 주된 수신인은 아니지만, 업무상 메일 참조가 필요한 사람에게 CC를 걸어서 보낸다" },
      { term: "Comm.", definition: "커뮤니케이션, 의사소통" },
      { term: "CRM", definition: "고객과의 관계 관리를 통해 장기 충성고객을 확보하는 마케팅" },
      { term: "DB", definition: "여러 사람이 공유해 사용할 목적으로 통합 관리되는 데이터의 집합" },
      { term: "e.g.", definition: "예를 들어 (라틴어 exempli gratia를 줄인 것. for example로 읽음)" },
      { term: "EOB", definition: "업무 종료 시각" },
      { term: "EOD", definition: "문서의 끝" },
      { term: "EOM", definition: "제곧내. 메일 제목이 곧 내용임" },
      { term: "FYI", definition: "참고하세요" },
      { term: "FYR", definition: "참고하세요 (FYI보다 덜 중요할 때 사용)" },
      { term: "H", definition: "반기 (ex. 1H- 상반기, 2H- 하반기)" },
      { term: "HR", definition: "인적자원(인사)에 관련된 일" },
      { term: "i.e.", definition: "즉, 다시 말해 (라틴어 id est)" },
      { term: "KPI", definition: "핵심성과지표. 목표를 이루기 위해 달성해야 하는 지표" },
      { term: "KSF", definition: "핵심성공요인" },
      { term: "MECE", definition: "내용이 서로 중복되지 않으면서 누락되지 않게 정리하는 것" },
      { term: "MoM", definition: "전월 대비 증감률" },
      { term: "MVP", definition: "시장의 피드백을 받기 위해 최소한의 핵심기능만으로 구현한 테스트 제품" },
      { term: "N/A", definition: "해당사항 없음" },
      { term: "NDA", definition: "비밀유지계약서" },
      { term: "OJT", definition: "직장 내 교육 훈련" },
      { term: "OKR", definition: "조직의 이상적인 목표를 수립하고 이를 달성했다고 말할 수 있는 핵심 성과 지표를 설정하는 조직 관리 방식" },
      { term: "PM", definition: "제품 또는 프로젝트의 관리자" },
      { term: "PO", definition: "제품의 전반을 책임지는 디렉터이자 리더. 대체로 PM보다 더 많은 역할과 책임이 부여됨" },
      { term: "Q", definition: "분기 (ex. 1Q- 1분기, 2Q- 2분기)" },
      { term: "QoQ", definition: "전분기 대비 증감률" },
      { term: "R&R", definition: "역할과 책임 (ex. R&R이 불명확해서 업무 누락이 발생하네요)" },
      { term: "ROAS", definition: "광고비용 대비 매출. 광고 매출 ÷ 광고비 × 100" },
      { term: "ROI", definition: "투자 대비 이익률. 이익 ÷ 투자액 × 100" },
      { term: "T/O", definition: "조직 편성도. 주로 조직에 자리가 비었을 때 'T/O가 났다'고 표현함" },
      { term: "TBA", definition: "추후에 공고함" },
      { term: "TBD", definition: "추후에 결정함" },
      { term: "TF", definition: "특정 프로젝트를 위해 임시로 조직된 팀. TFT(Task Force Team)라고도 쓴다" },
      { term: "To-be", definition: "추후 개선안. 주로 실행 전/후 차이를 보여주어야 하는 보고서에서 As-is와 함께 사용한다" },
      { term: "VoC", definition: "고객의 소리" },
      { term: "VP", definition: "핵심 가치" },
      { term: "w", definition: "함께, 포함해 (ex. w.영업부)" },
      { term: "w/o", definition: "미포함, ~를 제외하고" },
      { term: "YoY", definition: "전년 대비 증감률" }
    ],
    "ㄱ~ㅁ": [
      { term: "각출", definition: "각자의 비용을 각자 지불하는 것" },
      { term: "갹출", definition: "같은 목적을 위해 여러 사람이 돈을 나눠 내는 것" },
      { term: "검토", definition: "어떤 내용이나 사실을 분석하고 확인함" },
      { term: "격무", definition: "몹시 고된 업무" },
      { term: "격일", definition: "하루를 거름 (ex. 이번 콘텐츠는 월, 수, 금 격일 발행하겠습니다)" },
      { term: "결재", definition: "부하직원이 제출한 안건을 상사가 검토한 뒤 승인하는 것" },
      { term: "결제", definition: "거래에 대한 대금을 주고받는 것" },
      { term: "공란", definition: "비워둔 칸" },
      { term: "공람", definition: "여러 사람이 봄. 또는 여러 사람이 보게 함" },
      { term: "공문", definition: "공공기관이나 단체에서 공식적으로 작성한 문서" },
      { term: "공제", definition: "받을 몫에서 일정한 금액을 뺌" },
      { term: "구두", definition: "입으로 하는 말 (ex. 구두상으로 말씀드렸다시피~)" },
    ],
    "ㅂ~ㅈ": [
      { term: "바텀업", definition: "실무자가 업무를 기획해 윗선에 보고하여 일을 진행하는 방식. 탑다운과 반대 개념" },
      { term: "반려", definition: "승인을 요청한 문서를 처리하지 않고 되돌려보냄" },
      { term: "배상", definition: "①절하여 올린다는 뜻. 편지 말미 본인 이름 뒤에 붙여 쓴다 (ex. 홍길동 배상) ②남에게 끼친 손해를 물어주는 일" },
      { term: "백업", definition: "①파일 손상 등에 대비해 데이터를 다른 저장장치에 복사해두는 것 ②담당자가 자리를 비우거나 일손이 부족할 때 업무를 돕는 것" },
      { term: "별첨", definition: "서류를 따로 첨부함" },
      { term: "분장", definition: "일이나 임무를 나누어 맡음 (ex. 신규 입사자가 있어 업무 분장을 새로 했습니다)" },
      { term: "불출", definition: "돈이나 물품을 내줌. 주기적으로 지급되는 경우에 주로 사용된다" },
      { term: "붙임", definition: "글에서 빠진 것이나 참고할 내용을 뒤에 덧붙여 적은 것" },
      { term: "사안", definition: "문제가 되는 일이나 계획" },
      { term: "사일로", definition: "팀끼리 벽을 치고 협력·소통하지 않는 상태" },
      { term: "상기", definition: "①지난 일을 돌이켜 생각해냄 ②어떤 사실을 알리기 위해 본문 위나 앞쪽에 적는 일. 또는 그런 기록" },
      { term: "상동", definition: "①서로 같음 ②위에 적힌 사실과 같음" },
      { term: "상신", definition: "윗사람에게 일에 대한 의견·상황을 말이나 글로 보고함" },
      { term: "세금계산서", definition: "물건을 사고팔 때 부가가치세법에 따라 발행하는 영수증" },
      { term: "세미나", definition: "연구회, 발표회, 토론회" },
      { term: "소구", definition: "소비자의 구매욕을 자극하기 위해 상품의 특성이나 매력을 호소하는 것" },
      { term: "소스", definition: "정보의 출처, 혹은 정보를 제공하는 사람이나 자료" },
      { term: "소프트카피", definition: "종이로 출력하지 않은 디지털 형태의 문서" },
      { term: "송부", definition: "편지나 물품을 보냄" },
      { term: "수기", definition: "글을 자기 손으로 직접 씀. 자동화 작업이 아니라 일일이 직접 입력해야 하는 업무를 '수기 업무'라고 칭한다" },
      { term: "순연", definition: "차례로 기일을 늦춤 (ex. 경제 불황으로 대규모 투자 계획을 순연하기로 했습니다)" },
      { term: "스콥", definition: "범위. 업무 범위를 가리킬 때 '업무 스콥'이라고 표현함" },
      { term: "스크럼", definition: "팀 단위에서 주기적으로 업무를 계획해 짧은 기간 동안 작업을 수행하는 업무 방식, 또는 이러한 업무를 위한 회의" },
      { term: "스크리닝", definition: "초기 단계에서 상품을 테스트해 선별하는 일" },
      { term: "스탠스", definition: "어떤 일에 대한 공개적인 입장, 태도" },
      { term: "스프린트", definition: "단기간에 집중해 프로젝트를 완료하는 업무 방식" },
      { term: "싱크", definition: "작업끼리 수행 시기를 발맞추는 것 (ex. 싱크 맞춰서 진행해 주세요)" },
      { term: "아삽", definition: "가급적 빨리" },
      { term: "아웃풋", definition: "투입한 자원으로 결과물을 생산해내는 것. 혹은 그 결과" },
      { term: "아이데이션", definition: "아이디어를 얻기 위해 행하는 모든 활동" },
      { term: "아젠다", definition: "회의 안건" },
      { term: "안건", definition: "토의하거나 조사하여야 할 사실" },
      { term: "애자일", definition: "빠르고 유연하게 의사결정하고 변화에 민첩하게 대응하는 조직 운영 방식" },
      { term: "액션 아이템", definition: "실행 과제" },
      { term: "양지", definition: "살펴서 알다 (ex. 유의사항을 양지하시기 바랍니다)" },
      { term: "어레인지", definition: "처리하다, 정리하다, 조율하다 (ex. 촬영 장소 어레인지 해주세요)" },
      { term: "어사인", definition: "업무를 배정하다, 맡기다" },
      { term: "얼라인", definition: "(목표나 방향을) 일치시키다, 결을 맞추다" },
      { term: "얼터", definition: "대안" },
      { term: "영업이익", definition: "매출액에서 원가와 판매관리비용을 차감한 금액" },
      { term: "영업일", definition: "업체가 실제로 문을 열고 영업을 하는 날 (ex. 5영업일 후 처리될 예정입니다)" },
      { term: "온보딩", definition: "조직에 잘 정착할 수 있도록 돕는 교육 과정" },
      { term: "워크숍", definition: "공동 연수, 공동 수련" },
      { term: "워킹데이", definition: "근무일. 대체로 평일을 가리킨다" },
      { term: "워터폴", definition: "정해진 단계에 따라 순차적으로 일을 진행하는 조직 운영 방식" },
      { term: "위임", definition: "사무 처리를 다른 사람에게 맡기는 것" },
      { term: "유선", definition: "전선에 의한 통신 방식. '전화'를 가리킨다 (ex. 유선으로 설명 드렸다시피~)" },
      { term: "유첨", definition: "파일 등을 첨부함" },
      { term: "이관", definition: "받은 공문이나 알림을 다른 부서로 보냄 (동의어: 이첩)" },
      { term: "이슈", definition: "문제가 되는 일" },
      { term: "익일", definition: "특정일의 바로 다음 날 ≠내일 (전일 - 당일 - 익일)" },
      { term: "인벌브", definition: "참여하다, 관여하다 (ex. 이 프로젝트에는 누가 인볼브 되어 있나요?)" },
      { term: "인보이스", definition: "청구서, 명세서" },
      { term: "인비", definition: "①인사에 관계된 비밀, 혹은 그런 서류 ②초대하다. Invitation의 준말 (ex. 미팅 일정 확정시 인비 드리겠습니다)" },
      { term: "인사이트", definition: "통찰력. 사물이나 현상의 본질을 꿰뚫는 것" },
      { term: "인폼", definition: "정보를 알리다" },
      { term: "인풋", definition: "생산 자원이나 정보를 투입하는 것" },
      { term: "작일", definition: "'어제'와 같은 말 (작일 - 금일 - 명일)" },
      { term: "재가", definition: "안건을 결재하여 허가함" },
      { term: "재고", definition: "①어떤 일이나 사안에 대해 다시 생각해보는 것 ②팔다 남아서 창고에 쌓여있는 물건" },
      { term: "재무", definition: "기업의 자금을 조달하고 운용하는 것" },
      { term: "재무제표", definition: "기업의 재무상태 파악을 위해 회계 원칙에 따라 작성한 보고서" },
      { term: "전결", definition: "권한을 위임받은 사람이 대신 결재하는 것" },
      { term: "전일", definition: "특정일의 바로 앞 날 ≠어제 (전일 - 당일 - 익일)" },
      { term: "전표", definition: "거래 증거 자료를 보존하기 위해 거래내용을 요약해 기록한 표" },
      { term: "제고", definition: "수준이나 정도를 끌어올림 (ex. 기업 이미지를 제고하다)" },
      { term: "제위", definition: "'여러분'과 같은 뜻 (ex. 수신자 제위)" },
      { term: "제의", definition: "의견이나 의논을 내놓음" },
      { term: "지결", definition: "회사의 돈을 써야할 때 그 내역을 검토하고 결정하는 일" },
      { term: "지급", definition: "①돈이나 물건을 정해진 몫만큼 내줌 ②매우 급함" },
      { term: "지양", definition: "더 높은 단계로 오르기 위해 어떤 것을 하지 않음 (ex. 늑장대응은 지양해야 합니다)" },
      { term: "지표", definition: "방향이나 목적, 기준을 나타내는 표지" },
      { term: "지향", definition: "어떤 목표로 뜻이 향함" }      
    ],
    "ㅊ~ㅎ": [
      { term: "차일", definition: "바로 앞에서 이야기한 날" },
      { term: "착수", definition: "어떤 일을 시작함" },
      { term: "참고", definition: "살펴서 생각함, 살펴서 도움이 될 만한 재료로 삼음" },
      { term: "참조", definition: "참고로 비교·대조해서 봄" },
      { term: "출타", definition: "다른 곳에 외출함" },
      { term: "커피챗", definition: "커피를 마시며 캐주얼하게 이야기 나누는 미팅" },
      { term: "컨선", definition: "우려" },
      { term: "컨퍼런스", definition: "특정 주제에 관해 사람들이 모여 토론하는 대규모 회의나 모임" },
      { term: "컨퍼런스콜", definition: "3인 이상이 전화로 진행하는 회의" },
      { term: "컨펌", definition: "승인하다, 확인하다" },
      { term: "컬쳐덱", definition: "조직문화를 문서화한 자료" },
      { term: "컷오프", definition: "주로 물류업계에서 화물 반입 마감 시간을 가리킨다" },
      { term: "케이스스터디", definition: "사례 조사, 사례 연구" },
      { term: "케파", definition: "능력, 역량. 주로 생산 가능한 최대치를 표현할 때 사용한다" },
      { term: "크로스체크", definition: "여러 명의 관점으로 정보나 문서를 검사하는 것" },
      { term: "킥오프", definition: "시작하다, 착수하다. 프로젝트를 시작하면서 갖는 첫 미팅을 '킥오프 미팅'이라 칭한다" },
      { term: "타깃", definition: "대상, 목표" },
      { term: "타운홀미팅", definition: "전 직원이 모여 의견을 주고받는 회의" },
      { term: "탑다운", definition: "상사가 부하에게 업무를 지시하는 방식. 바텀업과 반대 개념" },
      { term: "태스크", definition: "과업. 꼭 해야 할 일이나 임무" },
      { term: "토스", definition: "전달하다, 상대에게 넘기다" },
      { term: "톤앤매너", definition: "분위기나 어조, 태도 등 기업과 브랜드의 정체성을 나타내는 요소" },
      { term: "트래픽", definition: "특정 사이트 등의 접속/이용량" },
      { term: "팔로업", definition: "후속조치, 사후점검 (ex. 제품 출시 후 이상 없는지 계속 팔로업해주세요)" },
      { term: "페르소나", definition: "고객(타깃)을 구체화한 것 (ex. 우리의 페르소나는 스포츠를 즐기는 외향적인 30대 여성 직장인입니다)" },
      { term: "펜딩", definition: "결정되지 않고 보류 중인 상태" },
      { term: "폐사", definition: "말하는 이가 자기 회사를 낮추어 이르는 말" },
      { term: "포워드", definition: "전달하다, 주로 메일을 다른 사람에게 전달할 때 사용함" },
      { term: "품의", definition: "상사에게 말이나 글로 여쭈어 의논함" },
      { term: "프레임워크", definition: "어떤 일에 대한 판단·결정을 위한 틀" },
      { term: "피드백", definition: "작업한 일의 결과에 대해 평가나 의견, 조언을 주는 것" },
      { term: "피봇팅", definition: "사업체는 그대로 유지한 채 사업의 방향을 바꾸는 것" },
      { term: "피저빌리티", definition: "실현가능성" },
      { term: "픽스", definition: "확정" },
      { term: "하기", definition: "①어떤 사실을 알리기 위해 본문 아래에 적는 것. 또는 그런 기록 ②돈을 치른 내용을 적은 기록" },
      { term: "하드카피", definition: "문서를 인쇄물로 출력한 것" },
      { term: "협의", definition: "둘 이상의 사람이 서로 협력해 의논함" },
      { term: "혼선", definition: "말이나 업무 등을 서로 다르게 파악해 혼란이 발생하는 것" },
      { term: "홀딩", definition: "일시 중지" },
      { term: "회계", definition: "돈의 흐름을 기록하고 보고하는 것" },
      { term: "회람", definition: "글이나 문서를 여러 사람이 차례로 돌려 봄" },
      { term: "회신", definition: "편지나 전화 등으로 답변함" }
    ]
  };

  const itemsPerPage = 5;

  const words = dictionaryData[activeTab] || [];
  const totalPages = Math.ceil(words.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderWords = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return words.slice(startIndex, endIndex);
  };

  return (
    <div className="Dictionary">
      <Header />
      <div className="body">
        <div className="main-title">
          <h1>직장어사전</h1>
        </div>
        <div className="menu-tabs">
          <button className={activeTab === "영어" ? "active" : ""} onClick={() => { setActiveTab("영어"); setCurrentPage(0); }}>영어</button>
          <button className={activeTab === "ㄱ~ㅁ" ? "active" : ""} onClick={() => { setActiveTab("ㄱ~ㅁ"); setCurrentPage(0); }}>ㄱ~ㅁ</button>
          <button className={activeTab === "ㅂ~ㅈ" ? "active" : ""} onClick={() => { setActiveTab("ㅂ~ㅈ"); setCurrentPage(0); }}>ㅂ~ㅈ</button>
          <button className={activeTab === "ㅊ~ㅎ" ? "active" : ""} onClick={() => { setActiveTab("ㅊ~ㅎ"); setCurrentPage(0); }}>ㅊ~ㅎ</button>
        </div>
        <div className="output-box1">
          {renderWords().map((word, index) => (
            <div key={index} className="word-item">
              {word.term} <br></br> {word.definition}
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePrev} disabled={currentPage === 0}>이전</button>
          <span>{currentPage + 1} / {totalPages}</span>
          <button onClick={handleNext} disabled={currentPage === totalPages - 1}>다음</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dictionary;
