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
