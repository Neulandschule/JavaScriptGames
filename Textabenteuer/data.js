let data = {
    1: {
        text: 'Es ist die letzte Unterrichtstunde vor dem Wochenende. Alle Schüler blicken nur noch hoffnungsvoll auf die Wanduhr über der Tür. Dann endlich - die Glocke klingelt. Die Hälfte der Klasse hat bereits alles gepackt und stürmt aus dem Zimmer. Auch du möchtest ins freie Wochenende starten, doch bevor du den Raum verlassen kannst, stellt sich Tara vor dich und sagt: "Hey [NAME], ich habe hier diesen alten Schlüssel gefunden. Er muss hier zu einem versperrten Ort in der Schule führen. Hast du Lust herauszufinden, wohin er führt?"',
        opt: [
            {
                    ref: 3,
                    text: 'Klar, für eine kleines Abenteuer bin ich immer bereit.' 
            },
            {
                    ref: 2,
                    text: 'Verpiss dich, es ist Wochenende und ich will hier raus.'
            }   
        ]
    },
    2: {
        text: '"War ja klar, dass du dir lieber zuhause wieder irgendeine Fantasiegeschichte ausdenken willst, anstatt selber etwas zu erleben" - Tara dreht sich um und geht. Du verlässt die Schule. Wohin der Schlüssel führt und was es dort zu entdecken gibt, wirst du wohl nie erfahren. ',
        opt: [
            {
                    ref: 'ende',
                    text: 'Neustart' 
            },
        ]
    },
    3: {
        text: '"Super, war mir klar, dass du dabei bist." - Tara drückt dir den Schlüssel in die Hand. Er ist bereits leicht verrostet und hat am Ringabschluss die Initialen der Schule eingraviert. Er muss hier einen Bereich versperren - aber welchen?',
        opt: [
            {
                    ref: 4,
                    text: 'Weiter' 
            },
        ]
    },
    4: {
        text: 'Wo möchtest du den Schlüssel probieren?',
        opt: [
            {
                ref: 5,
                text: 'Dachboden' 
            },
            {
                ref: 10,
                text: 'Keller'
            },   
            {
                ref: 6,
                text: 'Direktorzimmer'
            }, 
        ]
    },
    5: {
        text: '"Der Schlüssel öffnet bestimmt den Keller", sagst du zu Tara und ihr läuft gemeinsam die Stiegen hinauf, bis ihr vorm Eingang des Dachgeschoßes steht. Die Tür ist alt und modrig - genauso sie der Schlüssel. Du steckst den Schlüssel ins Loch und probierst ihn zu drehen. Er bewegt sich meinen Millimeter und hätte sich fast festgeklemmt. Du bekommst ihn gerade noch heraus. "Schade!", sagt Tara, "aber wir werden es noch herausfinden."',
        opt: [
            {
                    ref: 4,
                    text: 'Weiter' 
            }, 
        ]
    },
    6: {
        text: '"Der Schlüssel öffnet bestimmt die das Direktorzimmer." sagst du zu Tara und ihr läuft gemeinsam den Gang hinunter. Vorsichtig probierst du den Schlüssel an der Tür, als du plötzlich eine Stimme hinter euch hörst: "Tara und [NAME]. Was macht ihr da? Ihr dreht euch langsam um und seht wie Herr Winkler, der Geschichtslehrer, mit verschränkten Armen hinter euch steht.<br><br>Er scheint nicht sehr erfreut zu sein. <br>Was sagst du zu ihm?',
        opt: [
            {
                    ref: 7,
                    text: 'Wir haben diesen Schlüssel gefunden und wollten probieren, ob er passt.' 
            },
            {
                    ref: 8,
                    text: 'Wir wollten durch Schlüsselloch schauen, ob wer im Direktorzimmer ist.'
            }   
        ]
    },
    7: {
        text: 'Herr Winkler nimmt den Schlüssel und schaut ihn sich an. Seine Augen werden dabei immer größer. "Da... Da... Das ist der verschollen Schlüssel für…", stottert er langsam.Da packt den Schlüssel fest ihn seine Hand und sprach weiter: "...für einen Ort, der euch nichts angeht. Gut, dass er wieder aufgetaucht ist." Er dreht sich um und geht in schnellen Schritten von euch weg. "[NAME], du Idiot. Warum hast du ihm den Schlüssel gegeben. Jetzt finden wir nie heraus, wohin er uns geführt hätte.", sagt Tara und geht ebenfalls.',
        opt: [
            {
                    ref: 'ende',
                    text: 'Neustart' 
            }
        ]
    },
    8: {
        text: '"Seid ihr verrückt geworden! Wie kommt ihr auf die Idee hier herumzuspionieren? Das kann nicht akzeptiert werden. Als Strafe wird das Wochenende für euch später beginnen. Ihr müsst jetzt erst mal eine Stunde nachsitzen. Mitkommen!"<br>Ihr folgt Herrn Winkler mit gesenktem Kopf.<br>"Bist du sauer auf mich?" flüsterst du zu Tara. <br>"Ach was, " antwortet sie, „wir haben ja den Schlüssel noch".',
        opt: [
            {
                    ref: 9,
                    text: 'Weiter' 
            }
        ]
    },
    9: {
        text: 'Im Nachsitzzimmer seid ihr nicht allein. Neben der meistens frechen Susanne und müssen auch die Lausbuben Max und Moriz nachsitzen. Außerdem befindet sich ein älterer Schüler mit dem Namen „Irrer Igor“ im Zimmer. Er befindet sich gerade in der Abschlussklasse, ist aber öfter durchgefallen. <br>Als du dich mit Tara über den Schlüssel unterhältst, unter bricht er euch:„Oh, ihr seid in den Besitz des Kellerschlüssel gekommen. Ich hatte ihn auch mal“<br>Tara: „Der Kellerschlüssel? Was befindet sich dort?“ <br>Irrer Igor: „Keine Ahnung. Es war mir zu dunkel und unheimlich dort. Ich habe den Raum gleich wieder verlassen. Aber vielleicht findet ihr ja heraus, welches Geheimnis dich dort befindet.“',
        opt: [
            {
                    ref: 10,
                    text: 'Zum Keller' 
            }, 
        ]
    },
    10: {
        text: 'Ihr steht vor der Kellertür. Sie ist alt und rostig, genauso wie der Schlüssel. Du schiebst ihn langsam ins Schüsselloch. Er passt! Beim Drehen nach rechts hörst du ein leichtes Knacken. Die Tür ist entsperrt! <br><br>Vorsichtig öffnet ihr die Tür und betretet den Raum…',
        opt: []
    },
};


