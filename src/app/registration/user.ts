
export class User {
        
    constructor(
        public id: number = null,
        public first: string,
        public last: string,
        public email: string,
        public password: string,
        public confirmation: string,
        public address: string,
        public unit: number = null,
        public city: string,
        public state: string,
        public lucky: boolean,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
    
}
