var menuVar = {
    "recommend" : [
        { // big_mac
            "name" : "빅맥", "img" : "../static/media/mac_food/hamburger/big_mac.png", "price" : 5700
        },
        { // 1955
            "name" : "1955버거", "img" : "../static/media/mac_food/hamburger/1955.png", "price" : 6800
        },
        { // mac_spicy
            "name" : "맥스파이시 상하이 버거", "img" : "../static/media/mac_food/hamburger/mac_spicy.png", "price" : 5700
        },
        { // mac_chicken
            "name" : "맥치킨 모짜렐라 버거", "img" : "../static/media/mac_food/hamburger/mac_chicken.png", "price" : 5800
        },
        { // jeju
            "name" : "제주 한라봉 칠러", "img" : "../static/media/mac_food/drink/jeju.png", "price" : 3700
        },
        { // chicken_tomato_snack_wrap
            "name" : "치킨 토마토 스낵랩", "img" : "../static/media/mac_food/side/chicken_tomato_snack_wrap.png", "price" : 2800
        },
        { // mac_wing_2
            "name" : "맥윙 2조각", "img" : "../static/media/mac_food/side/mac_wing_2.png", "price" : 3700
        },
        { // strawberry_shake
            "name" : "딸기 쉐이크", "img" : "../static/media/mac_food/drink/strawberry_shake.png", "price" : 3500
        },
        { // choco_shake
            "name" : "초코 쉐이크", "img" : "../static/media/mac_food/drink/choco_shake.png", "price" : 3500
        },
    ],
    "hamburger" : [
        [ // big_mac
            { // single -> menuVar["hamburger"][0][0]
                "name" : "빅맥", "img" : "../static/media/mac_food/hamburger/big_mac.png", "price" : 5700
            },
            { // normal_set
                "name" : "빅맥 세트", "img" : "../static/media/mac_food/hamburger/big_mac_set.png", "price" : 7500
            },
            { // large_set
                "name" : "빅맥 라지 세트", "img" : "../static/media/mac_food/hamburger/big_mac_set.png", "price" : 8100
            },
        ],
        [ // 1955
            { // single
                "name" : "1955버거", "img" : "../static/media/mac_food/hamburger/1955.png", "price" : 6800
            },
            { // normal_set
                "name" : "1955버거 세트", "img" : "../static/media/mac_food/hamburger/1955_set.png", "price" : 8800
            },
            { // large_set
                "name" : "1955버거 라지 세트", "img" : "../static/media/mac_food/hamburger/1955_set.png", "price" : 9400
            },
        ],
        [ // mac_spicy
            { // single
                "name" : "맥스파이시 상하이 버거", "img" : "../static/media/mac_food/hamburger/mac_spicy.png", "price" : 5700
            },
            { // normal_set
                "name" : "맥스파이시 상하이 버거 세트", "img" : "../static/media/mac_food/hamburger/mac_spicy_set.png", "price" : 7500
            },
            { // large_set
                "name" : "맥스파이시 상하이 버거 라지 세트", "img" : "../static/media/mac_food/hamburger/mac_spicy_set.png", "price" : 8100
            },
        ],
        [ // mac_chicken
            { // single
                "name" : "맥치킨 모짜렐라 버거", "img" : "../static/media/mac_food/hamburger/mac_chicken.png", "price" : 5800
            },
            { // normal_set
                "name" : "맥치킨 모짜렐라 버거 세트", "img" : "../static/media/mac_food/hamburger/mac_chicken_set.png", "price" : 8200
            },
            { // large_set
                "name" : "맥치킨 모짜렐라 버거 라지 세트", "img" : "../static/media/mac_food/hamburger/mac_chicken_set.png", "price" : 8800
            },
        ],
        [ // supreme_shrimp
            { // single
                "name" : "슈슈 버거", "img" : "../static/media/mac_food/hamburger/supreme_shrimp.png", "price" : 5500
            },
            { // normal_set
                "name" : "슈슈 버거 세트", "img" : "../static/media/mac_food/hamburger/supreme_shrimp_set.png", "price" : 7300
            },
            { // large_set
                "name" : "슈슈 버거 라지 세트", "img" : "../static/media/mac_food/hamburger/supreme_shrimp_set.png", "price" : 7900
            },
        ],
        [ // double_bulgogi
            { // single
                "name" : "더블 불고기 버거", "img" : "../static/media/mac_food/hamburger/double_bulgogi.png", "price" : 5300
            },
            { // normal_set
                "name" : "더블 불고기 버거 세트", "img" : "../static/media/mac_food/hamburger/double_bulgogi_set.png", "price" : 7300
            },
            { // large_set
                "name" : "더블 불고기 버거 라지 세트", "img" : "../static/media/mac_food/hamburger/double_bulgogi_set.png", "price" : 7900
            },
        ],
    ],
    "side" : [
        { // mac_wing_2 -> menuVar["side"][0]
            "name" : "맥윙 2조각", "img" : "../static/media/mac_food/side/mac_wing_2.png", "price" : 3700
        },
        { // mac_wing_4
            "name" : "맥윙 4조각", "img" : "../static/media/mac_food/side/mac_wing_4.png", "price" : 6300
        },
        { // mac_wing_8
            "name" : "맥윙 8조긱", "img" : "../static/media/mac_food/side/mac_wing_8.png", "price" : 11700
        },
        { // chicken_tomato_snack_wrap
            "name" : "치킨 토마토 스낵랩", "img" : "../static/media/mac_food/side/chicken_tomato_snack_wrap.png", "price" : 2800
        },
    ],
    "drink" : [
        { // cola -> menuVar["drink"][0]
            "name" : "콜라", "img" : "../static/media/mac_food/drink/cola.png", "price" : 2200
        },
        { // zero_cola
            "name" : "제로 콜라", "img" : "../static/media/mac_food/drink/zero_cola.png", "price" : 2200
        },
        { // jeju
            "name" : "제주 한라봉 칠러", "img" : "../static/media/mac_food/drink/jeju.png", "price" : 3700
        },
        { // americano
            "name" : "아메리카노", "img" : "../static/media/mac_food/drink/americano.png", "price" : 3200
        },
        { // vanilla_shake
            "name" : "바닐라 쉐이크", "img" : "../static/media/mac_food/drink/vanilla_shake.png", "price" : 3500
        },
        { // strawberry_shake
            "name" : "딸기 쉐이크", "img" : "../static/media/mac_food/drink/strawberry_shake.png", "price" : 3500
        },
        { // choco_shake
            "name" : "초코 쉐이크", "img" : "../static/media/mac_food/drink/choco_shake.png", "price" : 3500
        },
    ],
    "dessert" : [
        { // oreo_mcflurry -> menuVar["dessert"][0]
            "name" : "오레오 맥플러리", "img" : "../static/media/mac_food/dessert/oreo.png", "price" : 3400
        },
        { // berry_strawberry_mcflurry
            "name" : "베리 스트로베리 맥플러리", "img" : "../static/media/mac_food/dessert/strawberry.png", "price" : 3400
        },
        { // vanilla_shake
            "name" : "바닐라 쉐이크", "img" : "../static/media/mac_food/drink/vanilla_shake.png", "price" : 3500
        },
        { // strawberry_shake
            "name" : "딸기 쉐이크", "img" : "../static/media/mac_food/drink/strawberry_shake.png", "price" : 3500
        },
        { // choco_shake
            "name" : "초코 쉐이크", "img" : "../static/media/mac_food/drink/choco_shake.png", "price" : 3500
        },
    ],
    "happy_meal" : [
        { // bulgogi -> menuVar["happy_meal"][0]
            "name" : "불고기 버거", "img" : "../static/media/mac_food/happy_meal/bulgogi.png", "price" : 5500
        },
        { // mc_nugget
            "name" : "맥너겟 4조각", "img" : "../static/media/mac_food/happy_meal/McNuggets.png", "price" : 5500
        },
        { // cheese
            "name" : "치즈 버거", "img" : "../static/media/mac_food/happy_meal/cheese.png", "price" : 5500
        },
    ],
};

var place = [
    {"mis" : "매장에서 식사"},
    {"mis" : "테이크 아웃"},
];

var sideVar = [
    {"img" : "../static/media/sidebar/mac_allday.png", "name" : "맥올데이 세트"},
    {"img" : "../static/media/sidebar/drink.png", "name" : "음료 & 커피"},
    {"img" : "../static/media/sidebar/set.png", "name" : "버거 & 세트"},
    {"img" : "../static/media/sidebar/set.png", "name" : "추천 메뉴"},
    {"img" : "../static/media/sidebar/happy_meal.png", "name" : "해피밀"},
    {"img" : "../static/media/sidebar/happy_country.png", "name" : "행복의나라 메뉴"},
    {"img" : "../static/media/sidebar/side.png", "name" : "사이드"},
];

// console.log(menuVar["hamburger"][0][1]["name"]);

var setMission = function() {
    /*
     * hamburger : 0-5
     * side : 6-9
     * drink : 10-16
     * dessert : 17-21
     * happy_meal : 22-24
    */
    // var mission_item_selector = Math.floor(Math.random() * 25);
    var mission_item_selector = Math.floor(Math.random() * 17);
    // console.log(mission_item1)
    var is_set = -1;
    var drink_selector = -1;
    var place_num = Math.floor(Math.random() * 2);
    var value = 1;
    
    // If hamburger, collect set
    if (mission_item_selector < 6) {
        is_set = Math.floor(Math.random() * 3);
    }
    
    // If hamburger or side, collect drink
    if (mission_item_selector < 10) {
        drink_selector = Math.floor(Math.random() * 7);
    }
    
    // Create mission
    var mission = "";

    // var basket = function(item, name, set, side, drink, price)
    var mission_item = [];
    if (mission_item_selector < 6) {
        mission = menuVar["hamburger"][mission_item_selector][is_set]["name"] + "를 " + value + "개 주문하기 (" + menuVar["drink"][drink_selector]["name"] + ")";
        mission_item.push(['hamburger', mission_item_selector, is_set, -1, -1, menuVar["hamburger"][mission_item_selector][is_set]["price"]]);
        mission_item.push(['drink', drink_selector, -1, -1, -1 , menuVar["drink"][drink_selector]["price"]]);
    } else if ((mission_item_selector >= 6) && (mission_item_selector < 10)) {
        mission = menuVar["side"][mission_item_selector - 6]["name"] + "을 " + value + "개 주문하기 (" + menuVar["drink"][drink_selector]["name"] + ")";
        mission_item.push(['side', mission_item_selector - 6, -1, -1, -1, menuVar["side"][mission_item_selector - 6]["price"]]);
        mission_item.push(['drink', drink_selector, -1, -1, -1 , menuVar["drink"][drink_selector]["price"]]);
    } else if ((mission_item_selector >= 10) && (mission_item_selector < 17)) {
        mission = menuVar["drink"][mission_item_selector - 10]["name"] + "를 " + value + "개 주문하기";
        mission_item.push(['drink', mission_item_selector - 10, -1, -1, -1 , menuVar["drink"][mission_item_selector - 10]["price"]]);
    } else if ((mission_item_selector >= 17) && (mission_item_selector < 22)) {
        mission = menuVar["dessert"][mission_item_selector - 17]["name"] + "를 " + value + "개 주문하기";
    } else if ((mission_item_selector >= 22) && (mission_item_selector < 25)) {
        mission = menuVar["happy_meal"][mission_item_selector - 22]["name"] + "을(를) " + value + "개 주문하기";
    } else {
        console.log("Random Value Error.");
    }
    mission = place[place_num]['mis'] + ", " + mission;
    console.log(mission);
    document.querySelector('#mission').innerHTML = mission;
    localStorage.setItem("mission", mission);
    localStorage.setItem('mission_item', mission_item);
};

var getMission = function() {
    mission = localStorage.getItem("mission");
    document.querySelector('#mission').innerHTML = mission;
};

var timer = function() {
    // 130초 (2분 10초)
    var time;
    if (sessionStorage.getItem('time') == null) {
        time = 130;
        sessionStorage.setItem('time', time);
    } else{
        time = sessionStorage.getItem('time');
    }
    
    var excess_time = sessionStorage.getItem('excess_time');
    if (excess_time == null) {
        excess_time == 0;
    }

    setInterval(function() {
        if (time > 0) {
            time--;
            document.querySelector('.time-left').innerHTML = time + "초";
            sessionStorage.setItem('time', time);
        } else {
            excess_time++;
            sessionStorage.setItem('excess_time', time);
            // console.log(excess_time + "초가 초과되었습니다.");
        }
    }, 1000)
};

var recommend_func = function() {
    for (var i = 0; i < 9; i++) {
        var image_id = "image_" + (i + 1);
        var item_id = "#item_" + (i + 1);

        document.getElementById(image_id).src = menuVar['recommend'][i]['img'];
        document.querySelector(item_id).innerHTML = menuVar['recommend'][i]['name'] + "<br><p class='price'>&#8361;" + (Math.floor(menuVar['recommend'][i]['price'] / 1000)) + "," + (menuVar['recommend'][i]['price'] % 1000);
    }
};

var drink_func = function() {
    for (var i = 0; i < 7 ; i++) {
        var image_id = "image_" + (i + 1);
        var item_id = "#item_" + (i + 1);
        
        document.getElementById(image_id).src = menuVar['drink'][i]['img'];
        document.querySelector(item_id).innerHTML = menuVar['drink'][i]['name'] + "<br><p class='price'>&#8361;" + (Math.floor(menuVar['drink'][i]['price']/1000)) + "," + (menuVar['drink'][i]['price'] % 1000);
    }

    document.getElementById("image_8").src = "../static/media/mac_food/blank.png";
    document.getElementById("image_9").src = "../static/media/mac_food/blank.png";  
}

var side_item_func = function() {
    for (var i = 0; i < 4 ; i++) {
        var image_id = "image_" + (i + 1);
        var item_id = "#item_" + (i + 1);
        
        document.getElementById(image_id).src = menuVar['side'][i]['img'];
        document.querySelector(item_id).innerHTML = menuVar['side'][i]['name'] + "<br><p class='price'>&#8361;" + (Math.floor(menuVar['side'][i]['price']/1000)) + "," + (menuVar['side'][i]['price'] % 1000);
    }
};

var side_func = function() {
    for (var i = 0; i < 7; i++) {
        var image_id = "side_image_" + (i + 1);
        var item_id = "#side_item_" + (i + 1);

        document.getElementById(image_id).src = sideVar[i]['img'];
        document.querySelector(item_id).innerHTML = sideVar[i]['name'];
    }
};

var select_set = function(burger) {
    var burger_num = -1;
    if (burger == 'big_mac')
        burger_num = 0;
    else if (burger == '1955')
        burger_num = 1;
    else if (burger == 'mac_spicy')
        burger_num = 2;
    else if (burger == 'mac_chicken')
        burger_num = 3;
    else if (burger == 'supreme_shrimp')
        burger_num = 4;
    else 
        burger_num = 5;

    document.getElementById("menu_img_single").src = menuVar['hamburger'][burger_num][0]['img'];
    document.querySelector("#menu_name_single").innerHTML = menuVar['hamburger'][burger_num][0]['name'];
    document.querySelector("#menu_price_single").innerHTML = "&#8361;" + (Math.floor(menuVar['hamburger'][burger_num][0]['price'] / 1000)) + "," + (menuVar['hamburger'][burger_num][0]['price'] % 1000);
    
    document.getElementById("menu_img_set").src = menuVar['hamburger'][burger_num][1]['img'];
    document.querySelector("#menu_name_set").innerHTML = menuVar['hamburger'][burger_num][1]['name'];
    document.querySelector("#menu_price_set").innerHTML = "&#8361;" + (Math.floor(menuVar['hamburger'][burger_num][1]['price'] / 1000)) + "," + (menuVar['hamburger'][burger_num][1]['price'] % 1000);

    document.getElementById("menu_img_large").src = menuVar['hamburger'][burger_num][2]['img'];
    document.querySelector("#menu_name_large").innerHTML = menuVar['hamburger'][burger_num][2]['name'];
    document.querySelector("#menu_price_large").innerHTML = "&#8361;" + (Math.floor(menuVar['hamburger'][burger_num][2]['price'] / 1000)) + "," + (menuVar['hamburger'][burger_num][2]['price'] % 1000);

    sessionStorage.setItem("name", burger_num);
};

var basket = function(item, name, set, side, drink, price) {
    if (sessionStorage.getItem('basket') == null) {
        var basket_item = [];
        basket_item.push([item, name, set, side, drink, price]);
    } else {
        basket_item = JSON.parse(sessionStorage.getItem('basket'));
        for (it in basket_item){
            if (basket_item[it].toString() != [item, name, set, side, drink, price].toString()){
                basket_item.push([item, name, set, side, drink, price]);
            }
        }
    }
    // console.log(JSON.stringify(basket_item));
    sessionStorage.setItem('basket', JSON.stringify(basket_item));
};

var send_burger_info = function(type) {
    var name = "";
    var price = 0;
    var price_text = "";
    if (type == 'single') {
        name = document.getElementById('menu_name_single').innerText;
        price_text = document.getElementById('menu_price_single').innerText;
        sessionStorage.setItem("set", 0)
    } else if (type == 'set') {
        name = document.getElementById('menu_name_set').innerText;
        price_text = document.getElementById('menu_price_set').innerText;
        sessionStorage.setItem("set", 1)
    } else {
        name = document.getElementById('menu_name_large').innerText;
        price_text = document.getElementById('menu_price_large').innerText;
        sessionStorage.setItem("set", 2)
    }
    // console.log(name);
    price = price_text[1] * 1000 + price_text[3] * 100;
    sessionStorage.setItem('selected_item', name);
    sessionStorage.setItem('selected_item_price', price);
    location.href="side_select.html"
};

var save_single = function() {
    var name = document.getElementById('menu_name_single').innerText;
    var burger_num = -1;

    if (name.substring(0, 2) == '빅맥')
        burger_num = 0;
    else if (name.substring(0, 2) == '19')
        burger_num = 1;
    else if (name.substring(0, 2) == '맥스')
        burger_num = 2;
    else if (name.substring(0, 2) == '맥치')
        burger_num = 3;
    else if (name.substring(0, 2) == '슈슈')
        burger_num = 4;
    else 
        burger_num = 5;

    basket('hamburger', burger_num, 0, -1, -1 , menuVar['hamburger'][burger_num][0]['price']);
};
