//
//  ViewController.swift
//  calenderApp
//
//  Created by Jared  Jackson on 6/27/18.
//  Copyright © 2018 Jared  Jackson. All rights reserved.
//

import UIKit

struct Event: Decodable {
    let id: Int?
    let startTime: Date?
    let endTime: Date?
    let description: String?
}

let now = Date()

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        fetchEvents()
    }
    
    func fetchEvents() {
        let url = URL(string: "http://localhost:3000/api/events")
        URLSession.shared.dataTask(with: url!) { (data, response, error) in
            guard let data = data else { return }
            do {
                let event = try
                    JSONDecoder().decode(Event.self, from: data)
                print(event)
            } catch let jsonErr {
                print("Error serializing Json:", jsonErr)
            }
        }.resume()
    }
}

