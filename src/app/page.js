"use client";

export default function Home() {
  return (
    <section>
      <div className="item-header">
        <img src="/bread.svg" alt="" />
      </div>
      <div className="item-body">
        <h1 className="item-title">나에게 어울리는 영어이름은?</h1>
        <p className="item-description">
          인공지능 추천으로 나에게 잘 맞는 영어이름을 알아보세요.
        </p>
      </div>
      <div className="item-footer">
        <button
          type="button"
          className="btn-blue"
          onClick={() => (location.href = "/question")}
        >
          영어이름 추천 시작하기
        </button>
      </div>
    </section>
  );
}
