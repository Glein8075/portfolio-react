import { useRef } from "react"
import Card from "../elements/Card";

function Slide({ slide, offset }){
    const active = offset === 0 ? true : null;
    const ref = useRef(null);

    return (
        <div
          ref={ref}
          className="slide"
          data-active={active}
          style={{
            "--offset": offset,
            "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
          }}
        >
          <Card title={slide.title} language={slide.language} link={slide.img} desc={slide.desc}/>
        </div>
      )
}

export default Slide