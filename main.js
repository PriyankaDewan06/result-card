const resultCal = (obj) => {
  const tm = obj.parentElement.parentElement.children[3].children[0].value;
  const pm = obj.parentElement.parentElement.children[4].children[0].value;

  const total_mark = parseFloat(tm) + parseFloat(pm);
  let grad;
  let point;

  const td = (obj.parentElement.parentElement.children[5].innerHTML =
    total_mark);

  if (total_mark >= 80 && total_mark <= 100) {
    grad = "A+";
    point = "5.0";
  } else if (total_mark >= 70 && total_mark < 80) {
    grad = "A";
    point = "4.0";
  } else if (total_mark >= 60 && total_mark < 70) {
    grad = "-A";
    point = "3.5";
  } else if (total_mark >= 50 && total_mark < 60) {
    grad = "B";
    point = "3.0";
  } else if (total_mark >= 40 && total_mark < 50) {
    grad = "C";
    point = "2.0";
  } else if (total_mark >= 33 && total_mark < 40) {
    grad = "D";
    point = "1.0";
  } else if (total_mark >= 0 && total_mark < 33) {
    grad = "F";
    point = "0.0";
  } else {
    alert("Invalid Input");
  }

  const grade = (obj.parentElement.parentElement.children[6].innerHTML = grad);
  obj.parentElement.parentElement.children[7].innerHTML = point;

  console.log(tm, pm, td, grade);
};

const totalResult = (obj) => {
  let allMark = document.getElementsByClassName("tm");
  console.log(allMark);
  let totalMark = 0;

  for (let i = 0; i < allMark.length; i++) {
    let mark = parseFloat(allMark[i].innerHTML);
    if (mark > 0) {
    } else {
      mark = 0.0;
    }
    totalMark += mark;
    console.log(mark);
  }
  obj.parentElement.parentElement.children[1].innerHTML = totalMark;
  console.log(totalMark);

  let allPoint = document.getElementsByClassName("point");
  let totalPoint = 0;
  let count = 0;
  let fourSub = 0;
  let point;
  for (let i = 0; i < allPoint.length; i++) {
    point = parseFloat(allPoint[i].innerHTML);
    console.log(point);

    if (point >= 0) {
      console.log("yes" + point);
      if (i == allPoint.length - 1) {
        if (point > 3) {
          point -= 3;
        } else {
          point = 0;
        }
        count--;
      }
      count++;
    } else {
      point = 0.0;
    }
    totalPoint += point;
  }
  totalPoint /= count;
  obj.parentElement.parentElement.children[3].innerHTML = totalPoint.toFixed(2);

  let grade;
  // gread system code here
  if (totalPoint == 5) {
    grade = "A+";
  } else if (totalPoint > 4) {
    grade = "A";
  } else if (totalPoint >= 3.5) {
    grade = "A-";
  } else if (totalPoint >= 3) {
    grade = "B";
  } else if (totalPoint >= 2) {
    grade = "C";
  } else if (totalPoint >= 1) {
    grade = "D";
  } else if (totalPoint < 1) {
    grade = "F";
  }
  obj.parentElement.parentElement.children[2].innerHTML = grade;
};
