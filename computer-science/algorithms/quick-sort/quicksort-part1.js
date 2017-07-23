// This function partitions given array and returns 
//  the index of the pivot.
var partition = function (array, p, r) {
    // This code has been purposefully obfuscated,
    // as you will implement it yourself in next challenge
    var e = array,
        t = p,
        n = r;
    var r = function (e, t, n) {
        var r = e[t];
        e[t] = e[n];
        e[n] = r;
    };
    var i = t;
    for (var s = t; s < n; s++) {
        if (e[s] <= e[n]) {
            r(e, s, i);
            i++;
        }
    }
    r(e, n, i);
    return i;
};


var quickSort = function (array, p, r) {
    if (p < r) {
        var pivot = partition(array, p, r);
        quickSort(array, p, pivot - 1);
        quickSort(array, pivot + 1, r);
    }
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length - 1);
println("Array after sorting: " + array);
Program.assertEqual(array, [2, 3, 5, 6, 7, 9, 10, 11, 12, 14]);

var array2 = [6, 79, -5, 8, 0, 12, 523, -94, 34, 2];
quickSort(array2, 0, array2.length - 1);
println("Array after sorting: " + array2);
Program.assertEqual(array2, [-94, -5, 0, 2, 6, 8, 12, 34, 79, 523]);