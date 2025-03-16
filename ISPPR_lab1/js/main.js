google.charts.load("current", { packages: ["wordtree", "orgchart"] })

google.charts.setOnLoadCallback(drawChart1)
function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ["Phrases"],
        ["cats are better than dogs"],
        ["cats eat kibble"],
        ["cats are better than hamsters"],
        ["cats are awesome"],
        ["cats are people too"],
        ["cats eat mice"],
        ["cats meowing"],
        ["cats in the cradle"],
        ["cats eat mice"],
        ["cats in the cradle lyrics"],
        ["cats eat kibble"],
        ["cats for adoption"],
        ["cats are family"],
        ["cats eat mice"],
        ["cats are better than kittens"],
        ["cats are evil"],
        ["cats are weird"],
        ["cats eat mice"],
    ])
    var options = {
        wordtree: {
            format: "implicit",
            word: "cats",
        },
    }
    var chart = new google.visualization.WordTree(document.getElementById("wordtree_basic"))
    chart.draw(data, options)
}

google.charts.setOnLoadCallback(drawChart2)
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ["фрази"],
        ["коти кращі ніж хомяки"],
        ["коти кращі ніж єноти"],
        ["коти кращі ніж кролі"],
        ["коти люблять нявкати"],
        ["коти люблять лазити у шафу"],
        ["коти люблять лазити на стіл"],
        ["коти друзі собак"],
        ["коти люблять спати зранку"],
        ["коти люблять спати вдень"],
        ["коти люблять стрибати"],
        ["коти люблять стрибати на диван"],
        ["коти люблять стрибати на паркан"],
        ["коти люблять стрибати на дерева"],
        ["коти гуляють уночі"],
        ["коти гуляють на самоті "],
        ["коти живуть з людьми"],
        ["коти живуть на вулиці"],
        ["коти живуть довго"],
        ["коти їдять ковбасу"],
        ["коти їдять корм"],
        ["коти їдять мишей"],
        ["коти друзі дітей"],
    ])
    var options = {
        wordtree: {
            format: "implicit",
            word: "коти",
        },
    }
    var chart = new google.visualization.WordTree(document.getElementById("wordtree_basic2"))
    chart.draw(data, options)
}

google.charts.setOnLoadCallback(drawSimpleNodeChart)
function drawSimpleNodeChart() {
    var data = google.visualization.arrayToDataTable([
        ["Phrases"],
        [
            "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this. But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.",
        ],
    ])
    var options = {
        wordtree: {
            format: "implicit",
            type: "double",
            word: "nation",
        },
    }
    var wordtree = new google.visualization.WordTree(document.getElementById("wordtree_double"))
    wordtree.draw(data, options)
}

//task1
google.charts.setOnLoadCallback(drawChartTask1)

function drawChartTask1() {
    var data = new google.visualization.DataTable()
    data.addColumn("string", "Name")
    data.addColumn("string", "Parent")
    data.addColumn("string", "ToolTip")

    data.addRows([
        ["Головна", "", "Головна"],
        ["Новини", "Головна", "Новини"],
        ["Історія", "Головна", "Історія"],
        ["Галерея", "Головна", "Галерея"],

        ["Підрозділи", "", "Підрозділи"],
        ["Деканат", "Підрозділи", "Деканат"],
        ["Кафедра ПЗАС", "Підрозділи", "Кафедра ПЗАС"],
        ["Про кафедру", "Кафедра ПЗАС", "Про кафедру"],
        ["Викладачі", "Кафедра ПЗАС", "Викладачі"],
        ["Програми практик", "Кафедра ПЗАС", "Програми практик"],

        ["Кафедра ІТ", "Підрозділи", "Кафедра ІТ"],
        ["Про кафедру", "Кафедра ІТ", "Про кафедру"],
        ["Викладачі", "Кафедра ІТ", "Викладачі"],
        ["Програми практик", "Кафедра ІТ", "Програми практик"],
        ["Робота зі студентами", "Кафедра ІТ", "Робота зі студентами"],

        ["Кафедра ІСПР", "Підрозділи", "Кафедра ІСПР"],

        ["Навчання", "", "Навчання"],
        ["Розклад", "Навчання", "Розклад"],
        ["Навчальні плани", "Навчання", "Навчальні плани"],
        [
            "121 Інженерія програмного забезпечення",
            "Навчальні плани",
            "121 Інженерія програмного забезпечення",
        ],
        ["122 Комп'ютерні науки", "Навчальні плани", "122 Комп'ютерні науки"],
        ["123 Комп’ютерна інженерія", "Навчальні плани", "123 Комп’ютерна інженерія"],
        ["124 Системний аналіз", "Навчальні плани", "124 Системний аналіз"],

        ["Самоврядування", "", "Самоврядування"],
        ["Вчена рада", "Самоврядування", "Вчена рада"],
        ["Студентська рада", "Самоврядування", "Студентська рада"],

        ["Наука", "", "Наука"],
        ["Конференція", "Наука", "Конференція"],

        ["Абітурієнту", "", "Абітурієнту"],
        ["Правила прийому", "Абітурієнту", "Правила прийому"],
    ])

    var chart = new google.visualization.OrgChart(document.getElementById("task1"))
    chart.draw(data, { allowHtml: true })
}

//task2
const text = `SpaceX, the aerospace manufacturer and space transportation company founded by Elon Musk, has revolutionized the space industry with its innovative approach to rocket design and launch. With such a complex and ambitious mission, it’s natural to assume that SpaceX uses advanced software and technology to facilitate its operations. One such technology is Python, a high-level programming language that has become increasingly popular in recent years.

Many companies, including SpaceX, have turned to Python for its simplicity, ease of use, and versatility. However, the question remains: does SpaceX actually use Python, and if so, how? In this article, we’ll explore the role that Python plays in SpaceX’s operations, from designing and testing rockets to monitoring and analyzing data during launches.
SpaceX, founded by Elon Musk in 2002, is revolutionizing the aerospace industry with its innovative rockets and spacecraft. However, behind the scenes, the company uses cutting-edge software tools to design, test and launch its vehicles.

Software Tools Used by SpaceX Engineers

The software tools used by SpaceX engineers include:

1. CAD Software

Computer-Aided Design (CAD) software is used by SpaceX engineers to create 3D digital models of rockets and spacecraft. This software allows engineers to visualize and test designs before they are built. SpaceX uses a variety of CAD software, including Siemens NX and CATIA.

2. Simulation Software

Simulation software is used by SpaceX engineers to simulate the behavior of rockets and spacecraft in various conditions. This software allows engineers to test the performance of designs and identify potential problems before they occur. SpaceX uses a variety of simulation software, including ANSYS and LS-DYNA.

3. Data Analysis Software

Data analysis software is used by SpaceX engineers to analyze data collected during rocket launches and spacecraft missions. This software allows engineers to identify trends and patterns in the data, which can be used to improve future designs. SpaceX uses a variety of data analysis software, including MATLAB and Python.

4. Project Management Software

Project management software is used by SpaceX engineers to manage projects and collaborate with team members. This software allows engineers to track project progress, assign tasks, and communicate with team members. SpaceX uses a variety of project management software, including Asana and Trello.

5. Version Control Software

Version control software is used by SpaceX engineers to manage changes to software code and other documents. This software allows engineers to track changes, collaborate with team members, and ensure that everyone is working with the latest version of a document. SpaceX uses a variety of version control software, including Git and Subversion.

The Importance of Software Tools in the Aerospace Industry

Software tools have become increasingly important in the aerospace industry, as they allow engineers to design, test, and launch vehicles more efficiently and with greater precision. SpaceX’s use of cutting-edge software tools has helped the company achieve a number of milestones, including the first privately-funded spacecraft to reach orbit and the first privately-funded spacecraft to dock with the International Space Station.

Conclusion

SpaceX’s innovative rockets and spacecraft are changing the way we think about space travel. However, behind the scenes, the company’s engineers rely on a suite of cutting-edge software tools to design, test, and launch their vehicles. By leveraging the power of software, SpaceX is able to push the boundaries of what is possible in the aerospace industry.

`

//task 2.1
google.charts.setOnLoadCallback(drawNodeChart2_1)
function drawNodeChart2_1() {
    var data = google.visualization.arrayToDataTable([["Phrases"], [text]])
    var options = {
        wordtree: {
            format: "implicit",
            type: "double",
            word: "SpaceX",
        },
    }
    var wordtree = new google.visualization.WordTree(document.getElementById("task2_1"))
    wordtree.draw(data, options)
}

//task 2.2
google.charts.setOnLoadCallback(drawNodeChart2_2)
function drawNodeChart2_2() {
    var data = google.visualization.arrayToDataTable([["Phrases"], [text]])
    var options = {
        wordtree: {
            format: "implicit",
            type: "double",
            word: "Python",
        },
    }
    var wordtree = new google.visualization.WordTree(document.getElementById("task2_2"))
    wordtree.draw(data, options)
}
