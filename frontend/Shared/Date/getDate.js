export const getDate = (time) => {

    const date = new Date();
    const itemTime = time.split("-");
    let timeAgo = "";

    const yearNow = date.getFullYear();
    const monthNow = date.getMonth() + 1;
    const dayNow = date.getDate();

    const itemYear = itemTime[0];
    const itemMonth = itemTime[1];
    const itemDay = itemTime[2].substring(0,2);

    if(yearNow - itemYear > 0) {
        timeAgo = `${yearNow - itemYear}년 전`;
    }
    else if(monthNow - itemMonth > 0){
        timeAgo = `${monthNow - itemMonth}개월 전`
    }
    else {
        if(dayNow == itemDay)
            timeAgo = "오늘"
        else {
            timeAgo = `${dayNow - itemDay}일 전`
        }
    }


    return timeAgo;
}