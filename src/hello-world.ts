export interface Hello {
    message: string;    
}

export function sayHello(): Hello {
    console.log('Hi');
    return {
        message: 'Hi'
    };
}