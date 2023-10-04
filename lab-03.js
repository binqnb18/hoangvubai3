arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]


//cau c. Tìm phần tử lớn nhất, phần tử nhỏ nhất trong mảng
// let dodaimang = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let max = dodaimang[0];
// let min = dodaimang[0];
// let i = 1;
// while( i < dodaimang.length) {
//     if(dodaimang[i] > max) {
//         max = dodaimang[i];
//     } else if(dodaimang[i] < min) {
//         min = dodaimang[i];
//     }
//     i++;
// }
// console.log("phan tu lon nhat la: ", max);
// console.log("phan tu nho nhat la: ", min);

// cau d. Tính trung bình cộng các phần tử trong mảng

// let dodaimang = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let sum = 0;
// let n = dodaimang.length;
// let i = 0;
// while( i < n) {
//     sum += dodaimang[i];
//     i++;
// }
// let average = sum / n;
// console.log("trung binh cong cua cac phan tu la: " + average);


//cau e. Đảo ngược thứ tự các phần tử trong mảng

// let dodaimang = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];

// let n = dodaimang.length;
// let i = 0;
// while( i < n / 2) {
//     let daonguoc = dodaimang[i];
//     dodaimang[i] = dodaimang[n - 1 -i]
//     dodaimang[n - 1 -i] = daonguoc;
//     i++
// }
// console.log("mang sau khi dao nguoc la: " + dodaimang);

//cau f. Tìm số lần xuất hiện của mỗi phần tử trong mảng

// let dodaimang = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let demso = {};
// let n =dodaimang.length;
// let i = 0;
// while( i < n) {
//     let element = dodaimang[i];
//     if(demso[element] === undefined) {
//         demso[element] = 1;
//     } else {
//         demso[element]++;
//     }
//     i++;
// }
// for(let key in demso) {
//     console.log(key + " xuat hien " + demso[key] + " lan ");

//cau g Chèn phần tử 117 vào đầu mảng
// let dodaimang = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let chenso = 117;
// let saukhichenso = [chenso];
// let i = 0;
// while( i < dodaimang.length) {
//     saukhichenso.push(dodaimang[i]);
//     i++;
// }
// console.log("sau khi chen so la: " + saukhichenso);


// cau h. Kiểm tra xem mảng có phải là mỗi dãy số tăng dần hay không


// let dodaimang = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let kiemtratangdan = true;
// let n = dodaimang.length;
// let i = 0;
// while( i < n - 1) {
//     if(dodaimang[i] > dodaimang[i +1]){
//         kiemtratangdan = false;
//         break;
//     }
//     i++;
// }
// if(kiemtratangdan){
//     console.log("nay la mang tang dan")
// } else {
//     console.log("nay la mang khong tang dan")
// }


// i. Sắp xếp mảng theo thứ tự tăng dần
let dodaimang = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];

let n = dodaimang.length;
let swapped;

while (true) {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
        if (dodaimang[i] > dodaimang[i + 1]) {
            // Hoán đổi hai phần tử nếu cần thiết
            let temp = dodaimang[i];
            dodaimang[i] = dodaimang[i + 1];
            dodaimang[i + 1] = temp;
            swapped = true;
        }
    }
    if (!swapped) {
        // Nếu không còn hoán đổi nào xảy ra, mảng đã được sắp xếp
        break;
    }
}

console.log(dodaimang);
