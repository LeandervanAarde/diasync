export const emailPattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/;
export const passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
export const namePattern = /^[\p{L}'.,\-ÁáÉéÍíÓóÚúÄäËëÏïÖöÜüÀàÂâÃãÅåĄąĆćČčĖėĘęÈèÊêÌìÍíÎîÏïĮįŁłŃńÒòÓóÔôÖöÕõØøÙùÚúÛûÜüŲųŪūŸÿÝýŻżŹźÑñÇçČčŠšŽžÀÁÂÂÄÄÃÃÅÅĄĄĆĆČČĖĖÊÊËËÈÈÍÍÎÎÏÏĮĮŁŁŃŃÒÒÓÓÔÔÖÖÕÕØØÙÙÚÚÛÛÜÜŲŲŪŪŸŸÝÝŻŻŹŹßÇçŒŒÆÆČČŠŠŽŽñÑâêÁÉíóú都道府県Федерацииআবাসযোগ্য\s.-]*$/u;
export const now = new Date();
export const currYear = now.getFullYear();