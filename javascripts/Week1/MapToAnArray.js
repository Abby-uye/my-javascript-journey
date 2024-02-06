grades = [75,98,44,89,77,98]

theFunction = function(values){
    
        if(values>=90&&values<=100){
            return values ="A"
        }
    
       else if ( values>=80&&values<90){
             return values = "B"}
        else if( values>=70&&values<=800){
            return values ="C"}
       else if(values>=60&&values<=70){
             returvalues ="D"}
       else if (values<60){
            return values ="D"
        }
        
    }
console.log(grades.map(theFunction))