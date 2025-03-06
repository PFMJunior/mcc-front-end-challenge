import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

const publishedDateFormatted = (date: Date) =>
{
    return format(date, "MM/dd/yyyy", {
        locale  : ptBR,
    })
}

export { publishedDateFormatted }