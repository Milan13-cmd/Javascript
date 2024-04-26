// less than 6years old -> free
// 6 to 17 years old -> child discount
//18 t0 o 26 years old -> student discount
// 27 to 66 years -> full price
// over 66 years old  -> senoir citizen discount


let age = 66;

if(age < 6){
    console.log( 'free ticket');
}
    else if(age < 18){
            console.log('child discount');
    }
    else if(age < 27) {
        console.log('student discount');
    }
    else if(age < 67){
        console.log('full price');
    }
    else{
        console.log('senoir citizen')
    }    
