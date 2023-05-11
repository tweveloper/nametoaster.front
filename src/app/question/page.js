"use client";

export default function question() {
  return (
    <section>
      <div className="item-header">
        <img src="/bread.svg" alt="" />
      </div>
      <div className="item-body">
        <h1 className="item-title">남자입니까? 여자입니까?</h1>
      </div>
      <div className="item-body">
        <button type="button" className="btn-answer">
          답변1
        </button>
      </div>
      <div className="item-body">
        <button type="button" className="btn-answer">
          답변2
        </button>
      </div>
    </section>
  );
}
