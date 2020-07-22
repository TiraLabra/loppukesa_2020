---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
title: Data Structures Project
---
<script src="../assets/fuu.js"></script>

<noscript><h2 style="color:red;font-weight:bold;">These pages will not render properly without javascript</h2>
Enable scripts at least from <code>tiralabra.github.io</code>.
</noscript>

## Course assistants

<script>
var script = document.scripts[document.scripts.length - 1];
tas.forEach(ta => {
  var elem = document.createElement("li");
  s = ta.name;
  if (ta.enEmail) {
    s = s + ", " + ta.enEmail;
  } else if (ta.email) {
    s = s + ", " + ta.email;
  } else {
    s = s + ", (first-name.last-name@helsinki.fi)"
  }
  if (ta.enSocial) {
    s = s + ", " + ta.enSocial;
  } else if (ta.social) {
    s = s + ", " + ta.social;
  }
  elem.innerHTML = s;
  script.parentElement.insertBefore(elem, script);
});
</script>

## 📅 Time table

Detailed course timing is available [here](timing/).

<script>
    script = document.scripts[document.scripts.length - 1];
    script.parentElement.insertBefore(makeCalendarEn(), script);
</script>

## 📣 News

* <script>
   if (doodleSent) {
    if (timing["demo"]) {
      document.write("Time an place for demonstration sessions has been set. Contact a course assistant if you can't make it.");
    } else {
      document.write("Doodle link for demo session planning has been sent to registered students. The email address is the one configured in labtool.");
    }
   } else {
    document.write("A poll will be sent out around the half way point of the course to schedule demo session(s).");
   }
 </script>
* The final submission deadline is on <script>document.write(enString(timing["end"].date));</script>. There are no time extensions available.
* If you find something to fix/improve on the course pages, please submit a Pull Request with the fix ([instructions]( 	bug_bounty/)). A bug bounty of 1 course point will be awarded for significant fixes (capped at 1 per student).

## Links to course material

* [Slides for the lecture](../kalvot/aloitusluento.pdf) (in Finnish)

* [Detailed course schedule](timing/)

* [Topic ideas](topics/)

* [Frequently asked questions](faq/)

* [Information about the required documentation](documentation/)

* [Guide to using git](git/)

* [Guide and examples on testing in java projects](https://github.com/TiraLabra/Testing-and-rmq)

* [Simple instructions for creating Gradle or Maven projects](maven-gradle/)

* [Information on submissions and weekly reports](submissions/)

* [Information on peer reviews](peer_review/)

## 🗒️ Labtool

* [https://study.cs.helsinki.fi/labtool/](https://study.cs.helsinki.fi/labtool/)
* Sign in with your University of Helsinki account.

## The course [Telegram channel](https://t.me/tkttiralabra)

## Guidance

<ul>
<script>
var script = document.scripts[document.scripts.length - 1];
if (timing["paja1"]) {
  var elem = document.createElement("li");
  elem.innerHTML = "Guidance is available at the times and places indicated in the calendar.";
  script.parentElement.insertBefore(elem, script);
  elem = document.createElement("li");
  elem.innerHTML = "You can attend the algorithm workshop at any time as well to get help with data structures or algorithms. The assistant may not be able to help you with course specific things other than at specified times.";
  script.parentElement.insertBefore(elem, script);
} else {
  var elem = document.createElement("li");
  elem.innerHTML = "There is no weekly course assistance during intensive periods. If you want face to face assistance on campus please contact the course assistant.";
  script.parentElement.insertBefore(elem, script);
}
</script>
<li>You may also contact the course assistant through <a href="https://t.me/tkttiralabra">Telegram</a>.</li>
<li>E-mail also works.</li>
</ul>

## Demonstration

<ul>
  <li id="demo" />
  <li><b>Mandatory!</b> Contact the course assistant if you can not make the Demo session. The Demo session is mandatory to get a passing grade!</li>
  <li>Everyone should present with their own computer. You may want to arrive early to test that the laptop works properly with the projector/screen sharing software. If you are not able to present using your own machine, please make arrangements with a friend or contact a course assistant.</li>
  <li>At most 5 minutes per project.</li>
  <li>Slides are not required for the presentation and generally not recommended unless you have a specific reason to use them.</li>
</ul>

<script>
  var elem = document.getElementById("demo");
  if (timing["demo2"]) {
    elem.innerHTML = "Times and places:";
    var ulelem = document.createElement("ul");
    Object.keys(timing).filter(name => name.startsWith("demo")).map(name => enEvent(timing[name])).forEach(ev => {
      var lielem = document.createElement("li");
      lielem.innerHTML = ev;
      ulelem.appendChild(lielem);
    })
    elem.appendChild(ulelem);
  } else if (timing["demo"]) {
    elem.innerHTML = "Time and place: " + enEvent(timing["demo"]) + ".";
  } else {
    elem.innerHTML = "Times and dates for demo sessions will be release later.";
  }
</script>

## Example projects

* [Saskeli's project](https://github.com/saskeli/NonogramSolver_TiRa) **Note:** The course has changed somewhat after this project was made.
* Jussi was also kind enough to allow [his project](https://github.com/yussiv/Compress) to be provided as an example. But stated that the project was made with pretty minimal effort.
* Both of these still have a good project structure.

## 🏆 Conduct of the course
Based on the number of credits (4) offered, the expected amount of work to complete the course should be approximately 107 hours. Plan to spend 15-20 hours on the course every week.

In this course the student creates a program that solves some sort of a problem. For solving the problem the student will apply suitable data structures and algorithms. The problem to solve is selected by the student with the help of the course assistant. A passing (or even good) grade does not require developing an algorithm from scratch. A student may develop their own algorithm(s) if desired. The main point of the course is that the created program works correctly and efficiently. The size of the problem instances and required efficiency will depend on the topic, and will be decided with help from the course assistant. Some example topics can be found [here](topics/).

The course will be partially (mostly) done online. All weekly submissions will be done online. The only mandatory meetings for the course are the first lecture and the demo session. More information on the submissions can be found [here](submissions/).

The program will be written in a language **approved by the course assistant**, which is almost always Java.

The primary goal of the course is to learn to implement data structures and algorithms. For this reason all required data structures and algorithms will have to be implemented by the student. Generally only **primitive types**, **arrays** and **strings** may be used, everything else has to be implemented using these. Other tools such as IO and GUI libraries may be used. **Data structures from standard libraries (such as ArrayList, HashMap and so on from Java) or algorithms (Collections.sort...) may not be used in the final submission**, and it is suggested that the imports for these are completely removed. If you are unsure if a particular class/library is allowed, ask the course assistant.

Generally a good approach to incrementally complete a project has been to first implement the core functionality of the program by using ready-made data structures and algorithms (queues, heaps, sorting algorithms). That is, it may be a prudent to first quickly implement the core functionality and later replace library implementations with self-made ones, i.e. replace implementations defined by interfaces with data structures and algorithms made from scratch. This is the assumed working idea for the project timeline. If you want to approach the project in a different way, you should decide on progress milestones for the project with the course assistant during the first week of the course.

## 📈 Grading criteria
* Program: 30 p
    * Functionality and features 10 p
    * Testing 10 p
    * Code documentation (JavaDoc and self documenting) 5 p
    * Clarity of the code 5 p

* Documentation 10 p
    * Topic definition 2p
    * Implementation 3p
    * Testing 3p (unit- and performance-!)
    * User guide 2p

* During the course 20p
    * Code reviews 2 * 2p = 4p
    * Weekly submissions 1p + 5 x 3p = 16 p

(All in all 60 p)

For a passing grade the project needs to contain self-made implementations for data structures and algorithms. Every project is separately graded. Below are typical gradings based on points.

* 5: 50 p
* 4: 45 p
* 3: 40 p
* 2: 35 p
* 1: 30 p
