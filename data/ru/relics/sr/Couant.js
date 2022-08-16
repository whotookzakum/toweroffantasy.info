const couant = {
    name: "Коэнт I",
    description: "Призывает дроида и создаёт щит на **5** секунд. Щит исчезает через **5** секунд или после одного полученного удара. Исчезание щита отбрасывает ближайших противников, нанося урон, равный **100%** от АТК + **50**. Если щит сломается в течение **1** секунды после создания, то ближайшие противники будут **оглушены** на **2** секунды. Перезарядка: **30** секунд. Разделяет время перезарядки с Коэнтом II.",
    advancement: {
            star1: "При разбивании щита скорость атаковавшего уменьшается на **35%** в течение **6** секунд.", 
            
            star2: "При разбивании щита финальный урон персонажа увеличивается на **20%** в течение **10** секунд.",
            
            star3: "При исчезании щита скорость передвижения персонажа увеличивается на **30%** в течение **5** секунд.",
            
            star4: "Уменьшает получаемый Урон Огнём на **1,5%**, даже если реликт не выставлен. Недоступно в Высшей лиге.",
            
            star5: "При разбивании щита даёт персонажу **5**-секундный эффект отражения, возвращающий обратно атаковавшему **60%** нанесённого урона."
        },
		
		cnData: {
        advancement: {
            star1: `<abbr title='China Exclusive'></abbr> При разбивании щита скорость атаковавшего и ближайших противников уменьшается на **35%** в течение **6** секунд.`,

            star2: `<abbr title='China Exclusive'></abbr> При разбивании щита финальный урон персонажа увеличивается на **10** секунд на значение, равное проценту потерянного здоровья, но не менее, чем на **30%**.`
        }
    }
}

export default couant;
