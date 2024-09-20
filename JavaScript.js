let courseList = [
    ["Teacher: ", "Mr.Smith", "Subject Area: ", "Math", "Credits: ", "3"],
    ["Teacher: ", "Mrs.Blane", "Subject Area: ", "Geology", "Credits: ", "2"],
    ["Teacher: ", "Mr.Rodgers", "Subject Area: ", "Science", "Credits: ", "3"]
    ]

function printSomething() {
    //let list = document.getElementsById("courseList-div");
    let html = "";
    html += "<ol>";
    for (let x = 0; x < 3; x++) {
        html += "<li>" + "Course " + x+1 + ": " + courseList[x] + "</li>";
    }
    html += "</ol>";
    
    //console.log(String(html))
    //alert(courseList)
    document.getElementById("courseList-div").innerHTML = html;
    

}

