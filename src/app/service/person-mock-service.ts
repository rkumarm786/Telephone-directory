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
    ],
    [
        "Theodore Decker",
        9548228385,
        49,
        "5784 Suspendisse Ave",
        "Proin@sem.com"
    ],
    [
        "Silas Frye",
        9590143506,
        32,
        "P.O. Box 269, 6512 Consequat Rd.",
        "rhoncus@rutrum.edu"
    ],
    [
        "Russell Fisher",
        9784034440,
        48,
        "3087 Dictum Av.",
        "neque.Morbi@Aliquameratvolutpat.net"
    ],
    [
        "Jacob Fowler",
        9734822644,
        35,
        "P.O. Box 746, 4621 Massa. St.",
        "Proin.velit.Sed@ullamcorpernislarcu.ca"
    ],
    [
        "Hall Pope",
        9357717094,
        46,
        "P.O. Box 286, 7442 Neque. St.",
        "hendrerit.a@pellentesqueSed.org"
    ],
    [
        "Walker Holman",
        9131066251,
        40,
        "P.O. Box 329, 8783 Purus. Av.",
        "felis@estmaurisrhoncus.co.uk"
    ],
    [
        "Alden Floyd",
        9810036387,
        21,
        "9500 A, St.",
        "In.tincidunt.congue@arcuSedeu.co.uk"
    ],
    [
        "Preston Small",
        9234545786,
        22,
        "178-9531 Nunc Av.",
        "varius@vehiculaPellentesquetincidunt.com"
    ],
    [
        "Stephen Mercer",
        9866470574,
        26,
        "142 Suscipit St.",
        "felis@ridiculus.edu"
    ],
    [
        "Raja Finley",
        9374467833,
        21,
        "477-4695 Ridiculus Road",
        "vestibulum.nec@magnaSuspendisse.edu"
    ],
    [
        "Harding Calhoun",
        9886223309,
        46,
        "7621 Aliquam Rd.",
        "nec@Phasellus.com"
    ],
    [
        "Howard Stein",
        9169036915,
        28,
        "531-3542 Adipiscing Rd.",
        "amet@liberomauris.edu"
    ],
    [
        "Elvis Wagner",
        9740719866,
        26,
        "Ap #686-7993 Eu St.",
        "nunc@pretiumetrutrum.org"
    ],
    [
        "Ivan Holmes",
        9234806666,
        32,
        "P.O. Box 293, 7501 Sodales St.",
        "accumsan@Seddiamlorem.edu"
    ],
    [
        "Edward Pickett",
        9154559883,
        24,
        "P.O. Box 716, 9478 Proin Av.",
        "convallis.in.cursus@primisin.co.uk"
    ],
    [
        "Graham Bennett",
        9515646064,
        31,
        "400-1764 Suspendisse Rd.",
        "ac.orci.Ut@massalobortis.ca"
    ],
    [
        "Julian Bond",
        9317497549,
        50,
        "225 Etiam Road",
        "ligula.Nullam.enim@at.ca"
    ],
    [
        "Cain Mcfarland",
        9790448784,
        26,
        "948-804 Interdum St.",
        "Phasellus.in@utmi.com"
    ],
    [
        "Lester Oliver",
        9543154636,
        50,
        "800 Neque. Avenue",
        "Aliquam.nec@risus.ca"
    ],
    [
        "Phelan Chang",
        8980408849,
        50,
        "Ap #476-7295 Taciti Av.",
        "sed@afacilisisnon.net"
    ],
    [
        "Perry Shelton",
        9044091446,
        29,
        "P.O. Box 841, 7062 Morbi Road",
        "Vivamus@insodales.ca"
    ],
    [
        "Daniel Wyatt",
        9731712922,
        41,
        "4210 Quis, Street",
        "aliquam@consectetuer.co.uk"
    ],
    [
        "Harper Dean",
        9064433997,
        48,
        "P.O. Box 846, 3351 Vel, Av.",
        "non.bibendum.sed@metus.co.uk"
    ],
    [
        "Omar Sullivan",
        9264944031,
        44,
        "260-5545 Imperdiet Street",
        "amet.dapibus@lobortisquispede.edu"
    ],
    [
        "Colton Christensen",
        9629097645,
        27,
        "8364 Non, Rd.",
        "et.tristique.pellentesque@sapien.edu"
    ],
    [
        "Dieter Cohen",
        9220315213,
        20,
        "325-9905 Sed Rd.",
        "dapibus.rutrum.justo@tempus.org"
    ],
    [
        "Hashim Burns",
        9744835228,
        30,
        "344-7079 Pellentesque St.",
        "vitae.orci.Phasellus@nunc.net"
    ],
    [
        "Rogan Newton",
        9656356453,
        47,
        "334-3838 Metus Road",
        "quis@sit.ca"
    ],
    [
        "Cooper Ellis",
        9982990769,
        32,
        "P.O. Box 548, 9808 Nec St.",
        "magna.Phasellus.dolor@semelit.org"
    ],
    [
        "Cooper Bonner",
        9117928347,
        32,
        "Ap #849-2308 Vel Av.",
        "mus.Proin@ultriciesligulaNullam.co.uk"
    ],
    [
        "Hyatt Becker",
        9659712814,
        43,
        "P.O. Box 368, 3767 Arcu. Rd.",
        "enim@liberoDonecconsectetuer.ca"
    ],
    [
        "Amery Rhodes",
        9934264678,
        47,
        "Ap #897-8935 Nulla St.",
        "cursus@Donec.ca"
    ],
    [
        "Ira Torres",
        9252446761,
        49,
        "Ap #991-731 Nec, Rd.",
        "ultricies@nibhAliquam.net"
    ],
    [
        "Martin Shannon",
        9325540792,
        45,
        "Ap #197-7021 Nullam Avenue",
        "congue.In@pellentesque.ca"
    ],
    [
        "Kennan Schmidt",
        9823515127,
        23,
        "692-2127 Praesent St.",
        "eu.odio.tristique@amet.org"
    ],
    [
        "Alvin Mccray",
        9833972642,
        24,
        "Ap #342-9862 Adipiscing Street",
        "In@est.edu"
    ],
    [
        "Boris Whitehead",
        9216165124,
        46,
        "Ap #473-1833 Felis. Avenue",
        "non.arcu@arcu.net"
    ],
    [
        "Tanner Kline",
        9448359488,
        46,
        "P.O. Box 434, 5518 Ac, Street",
        "est.vitae.sodales@imperdietornare.org"
    ],
    [
        "Isaac Cherry",
        9994978129,
        37,
        "Ap #434-5639 Tellus St.",
        "elit@inconsequat.edu"
    ],
    [
        "Jason Butler",
        9186273762,
        50,
        "9905 Vitae Rd.",
        "Mauris.eu@Innec.edu"
    ]
]

function createDirectory():Person[]{
    return scrappedData.map(data=>new Person(data[0],data[1],data[2],data[3],data[4]));
}

export default createDirectory();