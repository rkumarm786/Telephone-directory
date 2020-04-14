import { Person } from '../models/Person';

const scrappedData = [
    [
        "Salvador Bird",
        9308458276,
        30,
        "P.O. Box 292, 1846 Pede, St.",
        "tellus@egetmassa.edu"
    ],
    [
        "Dillon Hood",
        9467849617,
        32,
        "222-4064 Quis, St.",
        "tristique.aliquet.Phasellus@Nunc.net"
    ],
    [
        "Quinlan Terry",
        9478526043,
        48,
        "599-4283 Erat. Rd.",
        "ante.ipsum@convallisantelectus.org"
    ],
    [
        "Phillip Hart",
        9991999851,
        37,
        "Ap #109-5084 Purus, St.",
        "vulputate.posuere@arcuVestibulum.com"
    ],
    [
        "Rudyard Rice",
        9579094303,
        38,
        "Ap #732-8483 Ante Street",
        "eu.tempor@natoquepenatibus.net"
    ],
    [
        "Price Mccarty",
        9330298068,
        21,
        "Ap #731-3719 Nunc, Street",
        "fames@fermentum.com"
    ],
    [
        "Peter Mcclure",
        9418007407,
        33,
        "1369 Auctor Road",
        "mi.tempor.lorem@nonenim.co.uk"
    ],
    [
        "Elvis Frazier",
        9212420148,
        38,
        "277-1214 Litora Road",
        "dui.lectus@egetvenenatisa.net"
    ],
    [
        "Ryan Reyes",
        9702513577,
        23,
        "576-8881 In Rd.",
        "erat.semper@seddolor.ca"
    ],
    [
        "Hamish Morgan",
        9993758657,
        28,
        "744 Tristique Rd.",
        "eget.metus.In@lectus.com"
    ],
    [
        "Trevor Strong",
        9605637658,
        43,
        "Ap #473-2199 Vel, Road",
        "est@antedictum.ca"
    ],
    [
        "Griffin Espinoza",
        9486134287,
        42,
        "P.O. Box 319, 9975 Sodales St.",
        "amet@sit.ca"
    ],
    [
        "Ryder Frank",
        9688025187,
        23,
        "313-7347 Accumsan Rd.",
        "pede@ornare.net"
    ],
    [
        "Eric Graves",
        9291369628,
        43,
        "Ap #399-2440 Sed Rd.",
        "dolor@dictum.ca"
    ],
    [
        "Josiah Cherry",
        9864836682,
        20,
        "354 Consectetuer Ave",
        "justo.Proin.non@Curae.org"
    ],
    [
        "Addison Mejia",
        9054443558,
        24,
        "493-1391 Mattis St.",
        "Cras.vehicula@natoquepenatibuset.com"
    ],
    [
        "Maxwell Merrill",
        9511760811,
        40,
        "793-6418 Vitae Rd.",
        "Morbi.vehicula@luctus.net"
    ],
    [
        "Kuame Madden",
        9897159204,
        20,
        "7194 Vulputate St.",
        "amet.metus@Sedeunibh.ca"
    ],
    [
        "Ulysses Kidd",
        9068265997,
        40,
        "268-7923 Mollis. Rd.",
        "Sed@risusIn.ca"
    ],
    [
        "Dennis Rodgers",
        9334507793,
        38,
        "P.O. Box 338, 6865 Scelerisque Ave",
        "mi.lacinia@etmalesuada.org"
    ]
]

function createDirectory():Person[]{
    return scrappedData.map((data,key)=>new Person(key,data[0],data[1],data[2],data[3],data[4]));
}

export default createDirectory();