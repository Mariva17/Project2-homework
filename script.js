const products = [
    {
        id: 1,
        name: "Iphone 14",
        price: 100000,
        category: "phone"
    },
    {
        id: 2,
        name: "Iphone 13",
        price: 90000,
        category: "mobile"
    },
    {
        id: 3,
        name: "Iphone 12",
        price: 80000,
        category: "phone"
    },
    {
        id: 4,
        name: "Airpods 2",
        price: 55000,
        category: "headphone"
    },
    {
        id: 5,
        name: "Airpods 3",
        price: 55000,
        category: "headphone"   
    },
    {
        id: 6,
        name: "Mac Pro",
        price: 210000,
        category: "laptop"
    }
]
/* 
ДЗ. 0. Наполнить массив products подобными объектами, с разными значениями
    
 1. Есть массив объектов products. Вывести название и цену каждого товара в консоли со
    скидкой 10%
    2. Есть массив объектов products. Из этого массива добавить в новый пустой массив только те
        продукты:
            а)цена которых больше 88000; const moreThanPrice = [] нужно заполнить данный массив
            б) категория который "phone"; const categoryPhone = []
    3. Создать функцию, которая получает два числа в параметры и выводит в консоль бОльшее из них
        max(10, 20) // 20
        max(100, 5) // 100
    4. Написать функцию, которая запрашивает число у пользователя и отображает "ЧЕТ", если число четное
        и "НЕЧЕТ", если нечетное
    5. Написать функцию, которая получает два числа и возводит первое число в степень второго
        power(10, 2) // 100
        power(12, 2) // 144
        power(2, 5) // 32
    */
        
            // 1.
            for (let i = 0; i < products.length; i++) {
                products[i].price2 = products[i].price - products[i].price * 0.1
                console.log(products[i].name, products[i].price2)
            }
            // 2.
            // const moreThanPrice = []
            // for(let i = 0; i < products.length; i++) {
            //     if(products[i].price > 88000) {
            //         moreThanPrice.push(products[i])
            //     }
            // }
            // console.log(moreThanPrice)

            // const categoryPhone = []
            // for(let i = 0; i < products.length; i++) {
            //     if(products[i].category === "phone") {
            //         categoryPhone.push(products[i])
            //     }
            // }
            // console.log(categoryPhone)
            // 3.
            // function max(a, b) {
            //     if(a > b) {
            //         console.log(a)
            //     } else {
            //         console.log(b)
            //     }     
            // }
            // max(10, 20)
            // max(100, 5)

            // 4. 
            //  function number() {
            //     let ask = prompt("Введите число")
                
            //      if(ask % 2  === 0) {
            //          alert("ЧЕТ")
            //      } else {
            //          alert("НЕЧЕТ")
            //      }
            //  }
            // number()

                // 5.
            // function power(a, b) {
            //     console.log(Math.pow(a, b))
            // }
            // power(10, 2)
            // power(12, 2)
            // power(2, 5)