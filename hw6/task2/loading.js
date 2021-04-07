
module.exports = function loading(params) {
                        setInterval(() => {
                            console.clear();
                            console.log(`${params} |`)
                        setTimeout(() => {
                            console.clear();
                            console.log(`${params} /`)
                            setTimeout(() => {
                                console.clear();
                                console.log(`${params} -`)
                                setTimeout(() => {
                                    console.clear();
                                    console.log(`${params} \\`)
                                }, 300);
                            }, 300);
                        }, 300);
                        }, 1200);
};

