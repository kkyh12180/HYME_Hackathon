var menuVar = {
    "recommend" : {
        "big_mac" : {
            "name" : "빅맥", "img" : "../static/media/mac_food/hamburger/big_mac.png", "price" : 5700
        },
        "1955" : {
            "name" : "1955버거", "img" : "../static/media/mac_food/hamburger/1955.png", "price" : 6800
        },
        "mac_spicy" : {
            "name" : "맥스파이시 상하이 버거", "img" : "../static/media/mac_food/hamburger/mac_spicy.png", "price" : 5700
        },
        "mac_chicken" : {
            "name" : "맥치킨 모짜렐라 버거", "img" : "../static/media/mac_food/hamburger/mac_chicken.png", "price" : 5800
        },
        "jeju" : {
            "name" : "제주 한라봉 칠러", "img" : "../static/media/mac_food/drink/jeju.png", "price" : 3700
        },
        "chicken_tomato_snack_wrap" : {
            "name" : "치킨 토마토 스낵랩", "img" : "../static/media/mac_food/side/chicken_tomato_snack_wrap.png", "price" : 2800
        },
        "mac_wing_2" : {
            "name" : "맥윙 2조각", "img" : "../static/media/mac_food/side/chicken_tomato_snack_wrap.png", "price" : 3700
        },
        "strawberry_shake" : {
            "name" : "딸기 쉐이크", "img" : "../static/media/mac_food/drink/strawberry_shake.png", "price" : 3500
        },
        "choco_shake" : {
            "name" : "초코 쉐이크", "img" : "../static/media/mac_food/drink/choco_shake.png", "price" : 3500
        },
    },
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
        ]
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

// console.log(menuVar["hamburger"][0][1]["name"]);

var getMission = function() {
    /*
     * hamburger : 0-4
     * side : 5-8
     * drink : 9-15
     * dessert : 16-20
     * happy_meal : 21-23
    */
    var mission_item_selector = Math.floor(Math.random() * 24);
    // console.log(mission_item1)
    var is_set = -1;
    var drink_selector = -1;
    var value = Math.floor(Math.random() * 3) + 1;
    
    // If hamburger, collect set
    if (mission_item_selector < 5) {
        is_set = Math.floor(Math.random() * 3);
    }
    
    // If hamburger or side, collect drink
    if (mission_item_selector < 9) {
        drink_selector = Math.floor(Math.random() * 7);
    }
    
    // Create mission
    var mission = "";

    if (mission_item_selector < 5) {
        mission = menuVar["hamburger"][mission_item_selector][is_set]["name"] + "를 " + value + "개 주문하기 (" + menuVar["drink"][drink_selector]["name"] + ")";
    } else if ((mission_item_selector >= 5) && (mission_item_selector < 9)) {
        mission = menuVar["side"][mission_item_selector - 5]["name"] + "을 " + value + "개 주문하기 (" + menuVar["drink"][drink_selector]["name"] + ")";
    } else if ((mission_item_selector >= 9) && (mission_item_selector < 16)) {
        mission = menuVar["drink"][mission_item_selector - 9]["name"] + "를 " + value + "개 주문하기"
    } else if ((mission_item_selector >= 16) && (mission_item_selector < 21)) {
        mission = menuVar["dessert"][mission_item_selector - 16]["name"] + "를 " + value + "개 주문하기"
    } else if ((mission_item_selector >= 21) && (mission_item_selector < 24)) {
        mission = menuVar["happy_meal"][mission_item_selector - 21]["name"] + "을(를) " + value + "개 주문하기"
    } else {
        console.log("Random Value Error.")
    }

    console.log(mission);
}

var timer = function() {
    // 130초 (2분 10초)
    var time = 130;
    setInterval(function() {
        console.log(time + "초가 남았습니다.");
        time--;
    }, 1000)
}


/* test
    timer();
    getMission();
*/