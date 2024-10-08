let coursesList = ["SDEV-150", "ENG-204", "COMM-210"]

                function addCourse(courseName) {
                    //Adds a course to the list based off of the course's name that was sent through
                    if (!(courseName in coursesList)) { // Checks if the course is already added to the list
                        coursesList.append(courseName)
                    }
                    
                }

                function displayCourses() {
                    //console.log(coursesList)
                    //Displays all the courses in the courseList
                    let html = "";
                    html += "<ol>";
                    for (let x = 0; x < coursesList.length; x++) {
                        html += "<li>" + coursesList[x] + "\&emsp;\&emsp;\&emsp;\&emsp;\&emsp;\&emsp;\&emsp;\&emsp;" + "<button class='btn btn-primary' onclick='dropCourse()'>Drop Course</button>" + "</li>";
                    }
                    html += "</ol";

                    //console.log(html)

                    document.querySelector(".courseList.error").innerHTML = html;
                }
