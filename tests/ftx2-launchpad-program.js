const anchor = require("@anchor-lang/core");

describe("ftx2-launchpad-program", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  it("Is initialized!", async () => {
    // Add your test here.
    const program = anchor.workspace.ftx2LaunchpadProgram;
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
