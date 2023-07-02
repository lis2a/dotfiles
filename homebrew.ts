import { defineTask, exec } from "./deps.ts";

const homebrewRunner = defineTask([
    exec({
        cmd: 'brew',
        args: ['--version'],
    }),
    // Homebrew Core のアップデート
    exec({
        cmd: 'brew',
        args: ['update'],
    }),
    // Brewfile の同期
    exec({
        cmd: 'brew',
        args: ['bundle', '--file', '\'~/Brewfile\''],
    }),
    exec({
        cmd: 'brew',
        args: ['bundle', 'cleanup', '--force', '--file', '\'~/Brewfile\''],
    }),
    // Formula のアップデート
    exec({
        cmd: 'brew',
        args: ['upgrade'],
    }),
    // Formula のクリーンアップ
    exec({
        cmd: 'brew',
        args: ['cleanup', '-n'],
    }),
    exec({
        cmd: 'brew',
        args: ['cleanup'],
    })
])

await homebrewRunner.run()
