const quotes = [
    "Excellence is not a skill, it's an attitude.",
    "When love and skill work together, expect a masterpiece.",
    "Every skill you acquire doubles your odds of success.",
    "The purpose of education is to make good human beings with skill and expertise... Enlightened human beings can be created by teachers.",
    "It is possible to fly without motors, but not without knowledge and skill."
]

let index = 0;
let quoteText = document.getElementById("quote");

// Function to display next quote
function nextQuote() {
  quoteText.textContent = quotes[index];
  index = (index + 1) % quotes.length; // Loop back to the beginning when reaching the end
}
// Display initial quote
nextQuote();
// Automatically switch quotes every few seconds
setInterval(nextQuote, 5000); // Change quote every 3 seconds (adjust as needed)


// change skill box according to menu
const languages = document.getElementById("lang")
const frameworks = document.getElementById("frameworks")
const technologies = document.getElementById("technologies")
const tools = document.getElementById("tools")
const coursework = document.getElementById("coursework")
let skillBox = document.querySelector(".skill-box")

languages.addEventListener("click", addBox);
frameworks.addEventListener("click", addBox);
technologies.addEventListener("click", addBox);
tools.addEventListener("click", addBox);
coursework.addEventListener("click", addBox);
function addBox(eventDetails){
    eventDetails.preventDefault();
    let box = eventDetails.target;
    // clear skill-box
    let boxItem = document.querySelector(".box-item")
    boxItem.remove()
    // create a new div and append to the skill box
    let newBoxItem = document.createElement("div")
    newBoxItem.classList.add("box-item") 
    if(box.id === "lang"){
      newBoxItem.id = "lang-box"
      // abb skills to the new box item
      let java = document.createElement("div");
      java.classList.add("skill")
      java.textContent = "JAVA"
      newBoxItem.append(java);
      let javaScript = document.createElement("div");
      javaScript.classList.add("skill")
      javaScript.textContent = "JavaScript"
      newBoxItem.append(javaScript);
      let SQL = document.createElement("div");
      SQL.classList.add("skill")
      SQL.textContent = "SQL"
      newBoxItem.append(SQL);
      let HTML = document.createElement("div");
      HTML.classList.add("skill")
      HTML.textContent = "HTML"
      newBoxItem.append(HTML);
      let XML = document.createElement("div");
      XML.classList.add("skill")
      XML.textContent = "XML"
      newBoxItem.append(XML);
    }
    else if(box.id === "frameworks"){
      newBoxItem.id = "frameworks-box"
      // abb skills to the new box item
      let springBoot = document.createElement("div");
      springBoot.classList.add("skill")
      springBoot.textContent = "Spring Boot"
      newBoxItem.append(springBoot);
      let swing = document.createElement("div");
      swing.classList.add("skill")
      swing.textContent = "Java Swing"
      newBoxItem.append(swing);
      let bootstrap = document.createElement("div");
      bootstrap.classList.add("skill")
      bootstrap.textContent = "Bootstrap"
      newBoxItem.append(bootstrap);
      let react = document.createElement("div");
      react.classList.add("skill")
      react.textContent = "React"
      newBoxItem.append(react); 
    }
    else if(box.id === "technologies"){
      newBoxItem.id = "technologies-box"
      // abb skills to the new box item
      let microServices = document.createElement("div");
      microServices.classList.add("skill")
      microServices.textContent = "MicroServices"
      newBoxItem.append(microServices);
      let monolithic = document.createElement("div");
      monolithic.classList.add("skill")
      monolithic.textContent = "Monolithic"
      newBoxItem.append(monolithic);
      let restAPI = document.createElement("div");
      restAPI.classList.add("skill")
      restAPI.textContent = "Rest-API"
      newBoxItem.append(restAPI);
      let git = document.createElement("div");
      git.classList.add("skill")
      git.textContent = "Git"
      newBoxItem.append(git); 
      let maven = document.createElement("div");
      maven.classList.add("skill")
      maven.textContent = "Maven"
      newBoxItem.append(maven); 
      let MySQl = document.createElement("div");
      MySQl.classList.add("skill")
      MySQl.textContent = "MySQl"
      newBoxItem.append(MySQl); 
    }
    else if(box.id === "tools"){
      newBoxItem.id = "tools-box"
      // abb skills to the new box item
      let github = document.createElement("div");
      github.classList.add("skill")
      github.textContent = "GitHub"
      newBoxItem.append(github);
      let postman = document.createElement("div");
      postman.classList.add("skill")
      postman.textContent = "Postman"
      newBoxItem.append(postman);
      let intelliJ = document.createElement("div");
      intelliJ.classList.add("skill")
      intelliJ.textContent = "Intelli-J"
      newBoxItem.append(intelliJ);
      let vsCode = document.createElement("div");
      vsCode.classList.add("skill")
      vsCode.textContent = "VS-Code"
      newBoxItem.append(vsCode); 
    }
    else if(box.id === "coursework"){
      newBoxItem.id = "coursework-box"
      // abb skills to the new box item
      let oops = document.createElement("div");
      oops.classList.add("skill")
      oops.textContent = "OOP"
      newBoxItem.append(oops);
      let dataStructors = document.createElement("div");
      dataStructors.classList.add("skill")
      dataStructors.textContent = "Data Structors"
      newBoxItem.append(dataStructors);
      let algorithms = document.createElement("div");
      algorithms.classList.add("skill")
      algorithms.textContent = "Algorithms"
      newBoxItem.append(algorithms);
      let DBMS = document.createElement("div");
      DBMS.classList.add("skill")
      DBMS.textContent = "DBMS"
      newBoxItem.append(DBMS); 
      let OS = document.createElement("div");
      OS.classList.add("skill")
      OS.textContent = "Operating System"
      newBoxItem.append(OS);
      let CN = document.createElement("div");
      CN.classList.add("skill")
      CN.textContent = "Computer Network"
      newBoxItem.append(CN);
    }
    skillBox.append(newBoxItem)
}

  const skillsArray = ['JAVA', 'JavaScript', 'SQL', 'HTML', 'XML', 'Spring Boot', 'Java Swing', 'Bootstrap', 'React',
  'Microservices', 'Monolithic', 'Rest', 'Git', 'Maven', 'MySQL', 'GitHub', 'Postman', 'IntelliJ', 'VSCode', 'OOP',
  'Data Structurs', 'Algorithms', 'DBMS', 'Operating System', 'Computer Network'];
  let searchBar = document.getElementById("search-bar");
  let searcArea = document.getElementById('search');
  // add a box to show the search result
  let floatBox = document.createElement("div");
  floatBox.id = 'float-box'
  let result = document.createElement("div");
  result.classList.add("skill")
searchBar.addEventListener("input", (eventDetails) => {
  let bar = eventDetails.target;
  let input = bar.value.trim();
  if(input) {
    searchBtn.disabled = false;
    searchBtn.style.cursor = "pointer";
  } else {
    searchBtn.disabled = true;
    searchBtn.style.cursor = "not-allowed";
  }
  // see if input is present in the skills
    for(let s of skillsArray){
      if(input.toLowerCase() === s.toLowerCase()){
        // add search result to float box
        result.textContent = s;
        result.style.color = "black"
        break;
      } else {
        result.textContent = 'Skill not found';
        result.style.color = "gray"
      }
    }
    // add the box right after search area
    floatBox.append(result)
    searcArea.insertAdjacentElement('afterend', floatBox);
})
searchBar.addEventListener("blur", (eventDetails) => {
  floatBox.remove()
})

const searchBtn = document.getElementById('search-btn');
searchBtn.disabled = true;
searchBtn.addEventListener('click', (eventDetails) => {
  let input = searchBar.value.trim();
  // see if input is present in the skills
    for(let s of skillsArray){
      if(input.toLowerCase() === s.toLowerCase()){
        // add search result to float box
        result.textContent = s;
        result.style.color = "black"
        break;
      } else {
        result.textContent = 'Skill not found';
        result.style.color = "gray"
      }
    }
    // add the box right after search area
    floatBox.append(result)
    searcArea.insertAdjacentElement('afterend', floatBox);  
})