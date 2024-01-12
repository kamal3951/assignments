let t = 0

function counter(){
    console.log(t)
    t++
    setTimeout(counter,1000)
}

counter()

//yay did it myself!
//think for low-sized test cases(mammoth-tiny analogy), first principle thinking
