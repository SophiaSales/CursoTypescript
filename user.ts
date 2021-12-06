type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}

const account: AccountInfo = {
    id: 123,
    name: "sara"
} 
type CharInfo = {
    nickname: string;
    level: number
}
const char: CharInfo = {
    nickname: "sara",
    level: 100
}
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: 123,
    name: "sara",
    nickname: "sarahhh",
    level: 100
}