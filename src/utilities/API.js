export const setConfig = (data) => {
   return  {
       method : 'POST',
       headers : {
        "Content-Type": "application/json; charset=UTF-8"
        },
       body : JSON.stringify(data)
    };
};

const url = `https://jsonplaceholder.typicode.com/posts/1/comments`;

export const requestPostComments = async (method,data,callback = () => {}) => {
    if (method === 'GET'){
        let req = await fetch(url);
        let res = await req.json();
        callback(res);
    };

    if (method === 'POST'){
        let req = await fetch(url,setConfig(data));
        let res = await req.status;
         callback(res);
    }
};




