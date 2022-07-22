function adicionaApendiceALista<T>(array: any[], value: T){
    return array.map(item => item + value)
}

adicionaApendiceALista([1,2,3], 1)