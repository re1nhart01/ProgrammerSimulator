
 let playa = JSON.parse(localStorage.getItem('player'));
console.log(playa);



window.onload = () => {
    let language = document.querySelector(".language");
    language.style.display = 'none';
    if (playa.IQ <= 100) {
        let body = document.querySelector(".video-bg");


        body.style.backgroundImage = "url('./../assets/ssvoz_bg.png')"
        alert("Поздравляем!Вы Gавновоз");
        setTimeout(() => {
            window.location.href = './../GameMenu.html'
        },3000)
    } else if (playa.IQ > 100 && playa.IQ <150) {
        language.style.display = 'block';
        alert(`Вы, ${playa.name} попали на переобучение, ваше айкью:${playa.IQ}, и оно меньше чем 150, иди учись!`);
        let body = document.querySelector(".video-bg");
body.style.backgroundImage = "url('./../assets/ssvoz_bg.png')"
        setTimeout(() => {
            window.location.href = './../GameMenu.html'
        },3000)
    } else if (playa.IQ >= 150) {
        language.style.display = 'block';
        let body = document.querySelector(".video-bg");
       body.style.backgroundImage = "url('./../assets/day8_bg.png')"
           let input = document.createElement("textarea");
       let compile = document.createElement("button");
       input.classList.add("input");
        compile.classList.add("compile_button");
        compile.classList.add("QQ");
        input.placeholder = "Введите ваш код тут";
        compile.innerHTML = "Скомпилировать"
       body.append(input,compile);
compile.addEventListener('click', () => {
  if (input.value == "alert(\"Hello World!\");") {
      alert("Вы стали JavaScript разработчиком!");
      alert("Игра закончена");
      window.location.href = "./../GameMenu.html"
  } else if (input.value == "System.out.println(\"Hello world!\");") {
      alert("Вы стали Java разработчиком!");
      alert("Игра закончена");
      window.location.href = "./../GameMenu.html"
  } else if(input.value == "print(\"Hello world!\")") {
      alert("Вы стали Python разработчиком!");
      alert("Игра закончена");
      window.location.href = "./../GameMenu.html"
  } else if (input.value == "System.Console.WriteLine(\"Hello World!\");") {
      alert("Вы стали C# разработчиком!");
      alert("Игра закончена");
      window.location.href = "./../GameMenu.html"
  } else if (input.value == ".MODEL SMALL\n" +
      ".STACK 100h\n" +
      ".DATA\n" +
      "    HelloMessage DB 'Hello World',13,10,'$'\n" +
      ".CODE\n" +
      "START:\n" +
      "    mov ax,@data\n" +
      "    mov ds,ax\n" +
      "    mov ah,9\n" +
      "    mov dx,OFFSET HelloMessage\n" +
      "    int 21h\n" +
      "    mov ah,4ch\n" +
      "    int 21h\n" +
      "END START") {
      alert('Arakviel, разлогинься!');
      alert("Игра закончена");
      window.location.href = "./../GameMenu.html"
  } else {
      alert("Scratch вас зовет!");
  }
})
    }
}




