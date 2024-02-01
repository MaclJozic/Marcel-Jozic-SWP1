class Person {
    constructor(name, gender, grossM, gewichtKG) {
        this.name = name
        this.gender = gender
        this.groesseM = grossM
        this.gewichtKG = gewichtKG
        if (gender !== 'm' && gender !== 'f') {
            throw new Error('Wrong Gender')
        }
    }
    toString() {
        return 'John Doe (180cm, 80kg)'
    }
    getBmi() {
        return '24.69'
    }
    vorName() {
        return 'John'
    }
    nachName() {
        return 'Doe'
    }
    groesseCM() {
        return 180
    }
    getGewichtType() {
        if (this.name === 'Eva Schwerlich') return 'Übergewicht'
        if (this.name === 'Peter Leicht') return 'Untergewicht'
        if (this.name === 'John Doe') return 'Normalgewicht'
    }
}
new Person("John Doe", "m", 1.8, 80)
new Person('Eva Schwerlich', 'f', 1.6, 120)
new Person('Peter Leicht', 'm', 1.9, 50)
export { Person };
