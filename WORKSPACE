workspace(
    name = "vue",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

### Rules NodeJS
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "f2194102720e662dbf193546585d705e645314319554c6ce7e47d8b59f459e9c",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/2.2.2/rules_nodejs-2.2.2.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

node_repositories(
    package_json = ["//:package.json"],
)

# Setup Bazel managed npm dependencies with the `yarn_install` rule.
#
# To run yarn by hand, use
#   bazel run @nodejs_linux_amd64//:bin/yarn -- list
#   bazel run @nodejs_linux_arm64//:bin/yarn -- list
yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

# ####### Remove this when upgrading rules_nodejs
# # Install all Bazel dependencies needed for npm packages that supply Bazel rules
# load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

# install_bazel_dependencies()

# load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")

# ts_setup_workspace()
# #######
