export const getHome= (req, res) => {
    res.send('Hello World');
};

export const getNext= (req, res, next) => {
    console.info('Hello from:......')
    next()
};

export const sendNext= (req, res) => {
    res.send('Hello from next');
}

export const postHome= (req, res) => {
    res.send('Hello World from post');
}