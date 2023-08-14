const reviews = [
    {
        id: 0,
        name: "leonard adjei",
        image: "girl.jpg",
        role: "web developer",
        info: "my role as a front end developer is to make responsive websites for clienmts and also to ensure smooth functionong of the system"

        

    },

    {
        id: 1,
        name: "stanley akuffo",
        image: "boy.jpg",
        role: "fashion designer",
        info: "the big brown fox jumped over the lazy dog"
    },

    {
        id: 2,
        name: "Rodney amoateng",
        image: "child.jpg",

        role: "footballer",
        info: "i didnt like the way chelsea played tonight.it wqas very disgusting and such a bad perfomance!!!"
    }
]


let Name = document.getElementById("name")
let pic = document.getElementById("image")
let Role = document.getElementById("role")
let Info = document.getElementById("info")
let randombtn = document.querySelector("#random-btn")
let nextBtn = document.querySelector("#next")
let prevBtn = document.querySelector("#prev")

 let number = 0

 function listReview () {
     const review = reviews[number]
     Name.textContent = review.name
     pic.src = review.image
     Role.textContent = review.role
     Info.textContent = review.info

 }
 randombtn.addEventListener("click", ()=> {
     number = random()
     listReview(number)
     console.log(number);
 })

 nextBtn.addEventListener("click", () => {
    
      
      listReview()
      number++
      if(number > reviews.length - 1){
          number = 0
      }
    
     
    
}
 )
    

 prevBtn.addEventListener("click", () => {
     listReview()
     number--
     if(number < 0){
         number = reviews.length - 1
     }
 })
 

function random() {
    return Math.floor(Math.random() * reviews.length)
}

console.log(random())
   