function solution(today, terms, privacies) {
    const convert = (year, month, day) => {
      const date = new Date(year, month - 1, day);
      return date.getTime();
    }
    
    const formatedTerms = terms.map(el => {
        const [type, date] = el.split(' ');        
        return {[`${type}`]: Number(date)};
    })    
    
    const termsObject = Object.assign(...formatedTerms);
    
    const formatedPrivacies = privacies.map(el => {
        const [fullDate, termsType] = el.split(' ');
        const [year, month, day] = fullDate.split('.').map(el => Number(el));        
        return {year, month, day, termsType};
    })
    
    const addedPrivacies = formatedPrivacies.map(el => {
        const {year, month, day, termsType} = el;
        let currentMonth = month + termsObject[termsType];
        
        if(currentMonth > 12){
            currentMonth = currentMonth - 12;
            const currentYear = year + 1;
            return [currentYear, currentMonth, day];
        } else return [year,currentMonth, day];        
    })
    
    const todayMil = convert(...today.split('.'));
    const addedPrivaciesMil = addedPrivacies.map(el => convert(...el));
    
    const answer = [];
    
    addedPrivaciesMil.forEach((el,i) => {
        if(el <= todayMil) answer.push(i + 1);
    })
    
    return answer;
}