import axios from 'axios';
import { config } from 'dotenv'

config();

export const client = axios.create({
  baseURL: 'https://bizfileonline.sos.ca.gov',
  headers: {
    Origin: "https://bizfileonline.sos.ca.gov",
    Referer: "https://bizfileonline.sos.ca.gov/search/business",
    "Content-Length": 524,
    Cookie: "visid_incap_2299457=8ZCeO7rbTu2zALTpElObzF4kLWkAAAAAQUIPAAAAAAA8hj5RqipgK67N7WskvzyY; nlbi_2299457=T9gmF3P911ww1KY0yPrJvAAAAABElzZeQ/KwdS7b0zZ9xj3F; ASP.NET_SessionId=zztmwyf1r1zwafvidza21zkt; incap_ses_1136_2299457=vnkvSZxCAxK7QzD4auLDD+crLWkAAAAAfXh7zvMtUZrNRR7QYKhY/Q==; nlbi_2299457_2147483392=+daneBjFj0qJd4yxyPrJvAAAAAA9RPLSwHvnpucIPZwUDOQL; reese84=3:oT047fxLlL6aHK6gsWaHVQ==:SLiOJ1vrbkAz1VqMN5sV8c70VdO3xgqVl1LR6v/mAiQcs4pGkTfGjU58o87rwUpg8DYk9qo1O1qpm0d2QeXcaaBEY+ImydmFrJ+v6bkQmAFCrzlJNVUTlQffFZoW4EVMXCYCh6NQAZ1f1AgF23NZiE/LZZLSmaBb1PAKvP1DoNVXl0KiLkci8SHC2LO4bFQvRWA0k5qjx7lrh3wNAIDrQb3Fzau2/WOt0CBdeY2oyWlMAKUF59TGz2t3kb8rA64jqCmJ3EZc/33upocF1mJBykiP1HaDkrx1iO3OIPvFGk7RaMFpmXaJwc2ZsH93N7OBH0+Vqh9GsN1HL0A0PFiavPh0azZuU9OZkdenEPKtQJg5rkEf+1qYdRKtY8eeOsJ3MartATtjK4MRnDLpX3gRpLcLh8SGyZk/+ss0cp+MMslBa86GN2OXv1IhXlAItKgh+jyTUu9FL3l+ubQHcDbtqQ==:FbBIEEMzz9XZwNfelRXrTOYTaORSou67BRUgvEHWPHg=; incap_sh_2299457=iDEtaQAAAACo/Ot1BgAQiOO0yQY5womHQdiyPS4Qeqf43nFJ"
  }
})