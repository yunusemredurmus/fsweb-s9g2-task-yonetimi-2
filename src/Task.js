import React from "react";
import { differenceInDays, formatDistance } from 'date-fns'
import { tr } from 'date-fns/locale';

const Task = ({ taskObj, onComplete }) => {

  const today = new Date();
  const deadline = new Date(taskObj.deadline);
  const dayDifferent = differenceInDays(deadline, today);
  const lastTime = formatDistance(deadline, today, { addSuffix: true, locale: tr });

  console.log(dayDifferent);

  let spanStyle = {};
  if (dayDifferent >= 0 && dayDifferent <= 3) {
    spanStyle = { backgroundColor: "yellow" };
  } else if (dayDifferent > 3) {
    spanStyle = { backgroundColor: "red" };
  }

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="text-xs pt-4">
        son teslim: <span className="py-1 px-2 inline-block" style={spanStyle}>{lastTime}</span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill inline-block py-1.5 px-3 text-sm	border-2 border-solid" key={p} >{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
