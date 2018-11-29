var tags = ["advanced", "basic", "log", "private", "transaction", "stop", "network-setup", "smart-contract", "event", "load", "storage", "public", "sync", "istanbul", "state", "nosupport", "advanced-1.8.12", "isolate", "add", "basic-istanbul", "mining", "sign", "network-cleanup-required", "start", "raft"]
var specs = [{"path":"src/specs/01_basic/istanbul_fault_tolerance.html","name":"Istanbul fault tolerance and recoverability","scenarios":[{"name":"Modify number of validators from less than 2F + 1 to more than 2F + 1","tags":["basic-istanbul"]}]},{"path":"src/specs/01_basic/private_smart_contract_async.html","name":"Sending private smart contract asynchronously","scenarios":[{"name":"Contract is successfully mined with valid account","tags":["basic"]},{"name":"Contract is not mined with non-existed account","tags":["basic"]}]},{"path":"src/specs/01_basic/private_smart_contract_event.html","name":"Private smart contract with event","scenarios":[{"name":"Log events in total are **only** captured in participated parties when executing the contract","tags":["event","log","basic"]},{"name":"Log events in the state are **only** captured in participated parties when executing the contract","tags":["event","log","basic"]}]},{"path":"src/specs/01_basic/private_smart_contract_multiple.html","name":"Multiple private smart contracts","scenarios":[{"name":"Contracts are mined","tags":["private","load","basic"]}]},{"path":"src/specs/01_basic/private_smart_contract_single.html","name":"Single private smart contract","scenarios":[{"name":"Contract is mined","tags":["private","mining","basic"]},{"name":"Storage Root storing private smart contracts must be the same","tags":["private","storage","basic"]},{"name":"Transaction payload is secured","tags":["private","transaction","basic"]},{"name":"Privacy is enforced between parties","tags":["private","basic"]},{"name":"When there's an update, privacy is still enforced","tags":["private","basic"]}]},{"path":"src/specs/01_basic/private_smart_contract_spam.html","name":"Multiple private smart contracts between nodes","scenarios":[{"name":"Send transactions from one node to others","tags":["basic"]}]},{"path":"src/specs/01_basic/private_smart_contract_state_manipulation.html","name":"State manipulation in private smart contract","scenarios":[{"name":"Private state is maintained","tags":["private","state","basic"]}]},{"path":"src/specs/01_basic/public_smart_contract_event.html","name":"Public smart contract with event","scenarios":[{"name":"Log events in total are captured when executing the contract","tags":["basic"]}]},{"path":"src/specs/01_basic/value_transfer_private_transactions.html","name":"Value transfer in private transactions","scenarios":[{"name":"Unsuccessful private transaction submission","tags":["private","nosupport","basic"]},{"name":"Unsuccessful signed private transaction submission","tags":["private","nosupport","sign","basic"]}]},{"path":"src/specs/01_basic/value_transfer_public_transactions.html","name":"Value transfer in public transactions","scenarios":[{"name":"Successful public transaction submission","tags":["public","basic"]},{"name":"Successful signed public transaction submission","tags":["public","sign","basic"]}]},{"path":"src/specs/02_advanced/istanbul_block_synchronization.html","name":"Block synchronization when using Istanbul BFT consensus","scenarios":[{"name":"Verify block synchronization","tags":["add","start","stop","network-setup","advanced-1.8.12","sync","isolate","network-cleanup-required","istanbul"]}]},{"path":"src/specs/02_advanced/raft_block_synchronization.html","name":"Block synchronization when using Raft consensus","scenarios":[{"name":"Verify block synchronization","tags":["add","start","stop","network-setup","advanced-1.8.12","sync","isolate","network-cleanup-required","raft"]}]},{"path":"src/specs/02_advanced/transactions_for_block_height.html","name":"Transactions for different block heights","scenarios":[{"name":"Private smart contracts for Istanbul consensus","tags":["istanbul","private","smart-contract","advanced"]},{"name":"Public smart contracts for Istanbul consensus","tags":["istanbul","public","smart-contract","advanced"]},{"name":"Private smart contracts for Raft consensus","tags":["raft","advanced"]}]}]