import React from 'react'

function Card2() {
  return (
    <div className="absolute top-[502px] left-[4px] w-[1283px] h-[453px]">
    <div className="absolute top-[0px] left-[0px] rounded-7xl bg-gray-100 w-[1283px] h-[453px]" />
    <div className="absolute top-[112px] left-[602px] w-[660px] h-[230px]">
      <div className="absolute top-[0px] left-[0px] text-25xl font-semibold flex items-center w-[421px]">{`Governance & DAO`}</div>
      <div className="absolute top-[72px] left-[0px] flex items-center w-[660px] opacity-[0.6]">
        deon DAO is what makes all decision, to join our DAO you must
        become a Delegate.
      </div>
      <div className="absolute top-[168px] left-[0px] w-[202px] h-[62px]">
        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-crimson w-[202px] h-[62px]" />
        <div className="absolute top-[18px] left-[74px] font-semibold">
          More
        </div>
      </div>
    </div>
    <img
      className="absolute top-[80px] left-[66px] w-[420px] h-[292.43px] object-cover"
      alt=""
      src="/stake2-1@2x.png"
    />
  </div>
  )
}

export default Card2