var numUniqueEmails = function(emails) {
    let uniqueEmails = new Set();

    for (const email of emails){
        let [local, domain] = email.split('@');

        local = local.replace(/\./g,'');

        const plusIdx = local.indexOf('+');

        if (plusIdx !== -1){
            local = local.substring(0, plusIdx);
        }

        uniqueEmails.add(`${local}@${domain}`);
    }

    return uniqueEmails.size;
};

let emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
console.log(numUniqueEmails(emails));

emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"];
console.log(numUniqueEmails(emails));