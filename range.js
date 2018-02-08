function solution(list){
  let vals = [];
  let start = 0; end = 0;
  for (let i = 0; i < list.length; i++){
    if (((list[i] + 1) == (list[i + 1])) && ((list[i] + 2)== (list[i + 2]))) {
      start = i;
      end = i + 2;
    for (let j = i + 2; j < list.length; j++){
      if ((list[j] + 1) == (list[j + 1])) {
        end = j + 1;
      } else {
        vals.push(list[start]+ "-" + list[end]);
        i = j;
        break;
      }
    }
    } else {
      vals.push(list[i]);
    }
  }
  return vals.join(",");
}
