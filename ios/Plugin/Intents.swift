import Foundation

@objc public class Intents: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
