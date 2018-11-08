class BinaryTree {
    constructor(root = null) {
        this.root = root
    }

    depth(node = this.root) {
        const leftDepth = node.left && this.depth(node.left)
        const rightDepth = node.right && this.depth(node.right)
        const depth = leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1

        return depth
    }

    traverseBreadth({node = this.root, direction = "right"}) {
        let results = []

        let queue = []
        queue.push(node)

        while (queue.length > 0) {
            let current = queue.shift()

            switch (direction) {
                case "right":
                    results.push(current.value)
                    current.left && queue.push(current.left)
                    current.right && queue.push(current.right)
                    break
                case "left":
                    results.push(current.value)
                    current.right && queue.push(current.right)
                    current.left && queue.push(current.left)
                    break
            }
        }

        return results
    }

    traverseDepth({node = this.root, order = "pre", direction = "right"}) {
        switch (order) {
            case "pre":
                return this.traversePreOrder({node, direction})
            case "in":
                return this.traverseInOrder({node, direction})
            case "post":
                return this.traversePostOrder({node, direction})
        }
    }

    traversePreOrder({node = this.root, direction = "right"}) {
        let results = []

        if (direction === "right") {
            results.push(node.value)

            node.left &&
                results.push(
                    ...this.traversePreOrder({node: node.left, direction}),
                )

            node.right &&
                results.push(
                    ...this.traversePreOrder({node: node.right, direction}),
                )
        }

        if (direction === "left") {
            results.push(node.value)

            node.right &&
                results.push(
                    ...this.traversePreOrder({node: node.right, direction}),
                )

            node.left &&
                results.push(
                    ...this.traversePreOrder({node: node.left, direction}),
                )
        }

        return results
    }

    traverseInOrder({node = this.root, direction = "right"}) {
        let results = []

        if (direction === "right") {
            node.left &&
                results.push(
                    ...this.traverseInOrder({node: node.left, direction}),
                )

            results.push(node.value)

            node.right &&
                results.push(
                    ...this.traverseInOrder({node: node.right, direction}),
                )
        }

        if (direction === "left") {
            node.right &&
                results.push(
                    ...this.traverseInOrder({node: node.right, direction}),
                )

            results.push(node.value)

            node.left &&
                results.push(
                    ...this.traverseInOrder({node: node.left, direction}),
                )
        }

        return results
    }

    traversePostOrder({node = this.root, direction = "right"}) {
        let results = []

        if (direction === "right") {
            node.left &&
                results.push(
                    ...this.traversePostOrder({node: node.left, direction}),
                )

            node.right &&
                results.push(
                    ...this.traversePostOrder({
                        node: node.right,
                        direction,
                    }),
                )

            results.push(node.value)
        }

        if (direction === "left") {
            node.right &&
                results.push(
                    ...this.traversePostOrder({
                        node: node.right,
                        direction,
                    }),
                )

            node.left &&
                results.push(
                    ...this.traversePostOrder({node: node.left, direction}),
                )

            results.push(node.value)
        }

        return results
    }
}

// exports
module.exports = BinaryTree
