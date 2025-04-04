import { NS } from '@ns';
export async function main(ns: NS): Promise<void> {
    await ns.sleep(ns.args[1] as number);
    await ns.weaken(ns.args[0] as string);
}
